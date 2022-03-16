/**
 * This file is part of Adguard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * Adguard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Adguard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adguard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

import * as TSUrlFilter from '@adguard/tsurlfilter';

import { utils } from '../utils/common';
import { settings } from '../settings/user-settings';
import { localStorage } from '../storage';
import { listeners } from '../notifier';
import { log } from '../../common/log';
import { lazyGet, lazyGetClear } from '../utils/lazy';

/**
 * Read domains and initialize filters in a lazy manner
 */
class DomainsHolder {
    constructor(storageKey) {
        this.storageKey = storageKey;
    }

    /**
     * Retrieves domains from local storage
     * @param prop
     * @returns {string[]}
     */
    static getDomainsFromLocalStorage(prop) {
        let domains = [];
        try {
            const json = localStorage.getItem(prop);
            if (json) {
                domains = JSON.parse(json);
            }
        } catch (ex) {
            log.error('Error retrieving the allowlist domains {0}, cause {1}', prop, ex);
        }
        return domains;
    }

    get domains() {
        return lazyGet(this, 'domains', () => {
            return DomainsHolder.getDomainsFromLocalStorage(this.storageKey);
        });
    }

    add(domain) {
        if (this.domains.indexOf(domain) < 0) {
            this.domains.push(domain);
        }
    }

    includes(domain) {
        return this.domains.some((d) => {
            return d === domain || utils.url.getCroppedDomainName(d) === domain;
        });
    }
}

export const allowlist = (() => {
    const ALLOWLIST_DOMAINS_LS_PROP = 'white-list-domains';
    const BLOCKLIST_DOMAINS_LS_PROP = 'block-list-domains';

    /**
     * Rule which is returned, when allowlist is inverted
     * @type {NetworkRule}
     */
    const allowAllAllowlistRule = new TSUrlFilter.NetworkRule(
        '@@allowlist-all$document',
        utils.filters.ALLOWLIST_FILTER_ID,
    );

    /**
     * Returns allowlist mode
     * In default mode the filtering is enabled for all sites
     * In inverted model the filtering is disabled for all sites
     */
    function isDefaultAllowlistMode() {
        return settings.isDefaultAllowlistMode();
    }

    const allowlistDomainsHolder = new DomainsHolder(ALLOWLIST_DOMAINS_LS_PROP);

    const blocklistDomainsHolder = new DomainsHolder(BLOCKLIST_DOMAINS_LS_PROP);

    function notifyAllowlistUpdated() {
        listeners.notifyListeners(listeners.UPDATE_ALLOWLIST_FILTER_RULES);
    }

    /**
     * Create allowlist rule from input text
     * @param domain Domain
     * @returns {*}
     * @private
     */
    function createAllowlistRule(domain) {
        if (utils.strings.isEmpty(domain)) {
            return null;
        }

        return new TSUrlFilter.NetworkRule(`@@//${domain}$document`, utils.filters.ALLOWLIST_FILTER_ID);
    }

    /**
     * Adds domain to array of allowlist domains
     * @param domain
     */
    function addDomainToAllowlist(domain) {
        if (!domain) {
            return;
        }
        if (isDefaultAllowlistMode()) {
            allowlistDomainsHolder.add(domain);
        } else {
            blocklistDomainsHolder.add(domain);
        }
    }

    /**
     * Remove domain form allowlist domains
     * @param domain
     */
    function removeDomainFromAllowlist(domain) {
        if (!domain) {
            return;
        }

        /**
         * Match domains from collection if they equal exactly do domain
         * and if they equal to domain after removing www
         */
        const predicate = (domainFromCollection) => {
            return domainFromCollection === domain || utils.url.getCroppedDomainName(domainFromCollection) === domain;
        };

        if (isDefaultAllowlistMode()) {
            utils.collections.removeBy(allowlistDomainsHolder.domains, predicate);
        } else {
            utils.collections.removeBy(blocklistDomainsHolder.domains, predicate);
        }
    }

    /**
     * Save domains to local storage
     */
    function saveDomainsToLocalStorage() {
        localStorage.setItem(ALLOWLIST_DOMAINS_LS_PROP,
            JSON.stringify(allowlistDomainsHolder.domains));
        localStorage.setItem(BLOCKLIST_DOMAINS_LS_PROP,
            JSON.stringify(blocklistDomainsHolder.domains));
    }

    /**
     * Remove domain from allowlist
     * @param domain
     */
    function removeFromAllowlist(domain) {
        removeDomainFromAllowlist(domain);
        saveDomainsToLocalStorage();
        notifyAllowlistUpdated();
    }

    /**
     * Adds domain to allowlist
     * @param domain
     */
    function addToAllowlist(domain) {
        if (utils.strings.isEmpty(domain)) {
            return;
        }

        addDomainToAllowlist(domain);
        saveDomainsToLocalStorage();
        notifyAllowlistUpdated();
    }

    /**
     * Search for allowlist rule by url.
     */
    const findAllowlistRule = function (url) {
        if (!url) {
            return null;
        }

        const host = utils.url.getDomainName(url);
        const allowlistEnabled = settings.getAllowlistEnabledState();

        if (isDefaultAllowlistMode()) {
            if (allowlistEnabled && allowlistDomainsHolder.includes(host)) {
                return createAllowlistRule(host);
            }

            return null;
        }

        // condition for inverted mode
        if (allowlistEnabled && blocklistDomainsHolder.includes(host)) {
            // filtering is enabled on this website
            return null;
        }

        return allowAllAllowlistRule;
    };

    /**
     * Changes allowlist mode
     * @param defaultMode
     */
    const changeDefaultAllowlistMode = function (defaultMode) {
        settings.changeDefaultAllowlistMode(defaultMode);
        notifyAllowlistUpdated();
    };

    /**
     * Stop (or start in case of inverted mode) filtration for url
     * @param url
     */
    const allowlistUrl = function (url) {
        const domain = utils.url.getDomainName(url);
        if (isDefaultAllowlistMode()) {
            addToAllowlist(domain);
        } else {
            removeFromAllowlist(domain);
        }
    };

    /**
     * Start (or stop in case of inverted mode) filtration for url
     * @param url
     */
    const unAllowlistUrl = function (url) {
        const domain = utils.url.getDomainName(url);
        if (isDefaultAllowlistMode()) {
            removeFromAllowlist(domain);
        } else {
            addToAllowlist(domain);
        }
    };

    /**
     * Clear allowlisted only
     */
    const clearAllowlisted = function () {
        localStorage.removeItem(ALLOWLIST_DOMAINS_LS_PROP);
        lazyGetClear(allowlistDomainsHolder, 'domains');
    };

    /**
     * Add domains to allowlist
     * @param domains
     */
    const addAllowlisted = function (domains) {
        if (!domains) {
            return;
        }
        for (let i = 0; i < domains.length; i += 1) {
            const domain = domains[i];
            allowlistDomainsHolder.add(domain);
        }
        saveDomainsToLocalStorage();
    };

    /**
     * Clear blocklisted only
     */
    const clearBlocklisted = function () {
        localStorage.removeItem(BLOCKLIST_DOMAINS_LS_PROP);
        lazyGetClear(blocklistDomainsHolder, 'domains');
    };

    /**
     * Add domains to blocklist
     * @param domains
     */
    const addBlocklisted = function (domains) {
        if (!domains) {
            return;
        }
        for (let i = 0; i < domains.length; i += 1) {
            const domain = domains[i];
            blocklistDomainsHolder.add(domain);
        }
        saveDomainsToLocalStorage();
    };

    /**
     * Updates domains in allowlist
     * @param domains
     */
    const updateAllowlistDomains = function (domains) {
        domains = domains || [];
        if (isDefaultAllowlistMode()) {
            clearAllowlisted();
            addAllowlisted(domains);
        } else {
            clearBlocklisted();
            addBlocklisted(domains);
        }

        notifyAllowlistUpdated();
    };

    /**
     * Configures allowlist service
     * @param allowlist Allowlist domains
     * @param blocklist Blocklist domains
     * @param allowlistMode Allowlist mode
     */
    const configure = function ({
        allowlist,
        blocklist,
        mode,
        enabled,
    }) {
        clearAllowlisted();
        clearBlocklisted();
        addAllowlisted(allowlist || []);
        addBlocklisted(blocklist || []);
        settings.changeDefaultAllowlistMode(mode);
        settings.setAllowlistEnabledState(enabled);
        notifyAllowlistUpdated();
    };

    /**
     * Returns the array of allowlist domains
     */
    const getAllowlistDomains = function () {
        if (isDefaultAllowlistMode()) {
            return allowlistDomainsHolder.domains;
        }
        return blocklistDomainsHolder.domains;
    };

    /**
     * Returns the array of allowlisted domains
     */
    const getAllowlistedDomains = function () {
        return allowlistDomainsHolder.domains;
    };

    /**
     * Returns the array of blocklisted domains, inverted mode
     */
    const getBlocklistedDomains = function () {
        return blocklistDomainsHolder.domains;
    };

    /**
     * Initializes allowlist filter
     */
    const init = function () {
        /**
         * Access to allowlist/blacklist domains before the proper initialization of localStorage
         * leads to wrong caching of its values
         * To prevent it we should clear cached values
         * https://github.com/AdguardTeam/AdguardBrowserExtension/issues/933
         */
        lazyGetClear(allowlistDomainsHolder, 'domains');
        lazyGetClear(blocklistDomainsHolder, 'domains');
    };

    return {
        init,
        configure,

        getAllowlistDomains,
        getAllowlistedDomains,
        getBlocklistedDomains,
        updateAllowlistDomains,

        findAllowlistRule,

        allowlistUrl,
        unAllowlistUrl,

        isDefaultMode: isDefaultAllowlistMode,
        changeDefaultAllowlistMode,
    };
})();
