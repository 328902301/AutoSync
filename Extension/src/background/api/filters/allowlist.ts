/**
 * @file
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
import zod from 'zod';
import { getHost, tabsApi as tsWebExtTabsApi } from '@adguard/tswebextension';
import browser from 'webextension-polyfill';

import { Log } from '../../../common/log';
import { SettingOption } from '../../schema';
import { listeners } from '../../notifier';
import {
    settingsStorage,
    allowlistDomainsStorage,
    invertedAllowlistDomainsStorage,
} from '../../storages';

import { Engine } from '../../engine';

/**
 * Allowlist and Inverted Allowlist storages have same api
 * This type is used in generic private methods of {@link AllowlistApi}
 */
type DomainsStorage =
    | typeof allowlistDomainsStorage
    | typeof invertedAllowlistDomainsStorage;

/**
 * API for managing allowlist domain lists
 *
 * This class provided methods for creating and deleting rules in
 * {@link allowlistDomainsStorage} and {@link invertedAllowlistDomainsStorage}
 *
 */
export class AllowlistApi {
    /**
     * Reads stringified domains arrays from persisted storages
     * and save it in cache.
     * if data is not exist, set empty arrays.
     */
    public static init(): void {
        AllowlistApi.initStorage(allowlistDomainsStorage);
        AllowlistApi.initStorage(invertedAllowlistDomainsStorage);
    }

    /**
     * Checks if allowlist in inverted
     *
     * @returns true, if inverted, else returns false
     */
    public static isInverted(): boolean {
        return !settingsStorage.get(SettingOption.DefaultAllowlistMode);
    }

    /**
     * Checks if allowlist is enabled
     *
     * @returns true, if enabled, else returns false
     */
    public static isEnabled(): boolean {
        return settingsStorage.get(SettingOption.AllowlistEnabled);
    }

    /**
     * Gets domain list from {@link allowlistDomainsStorage}
     *
     * @returns list of allowlisted domains in default mode
     */
    public static getAllowlistDomains(): string[] {
        return AllowlistApi.getDomains(allowlistDomainsStorage);
    }

    /**
     * Gets domain list from {@link invertedAllowlistDomainsStorage}
     *
     * @returns list of allowlisted domains in inverted mode
     */
    public static getInvertedAllowlistDomains(): string[] {
        return AllowlistApi.getDomains(invertedAllowlistDomainsStorage);
    }

    /**
     * Set domain list to {@link allowlistDomainsStorage}
     *
     * @param domains - array of domains
     */
    public static setAllowlistDomains(domains: string[]): void {
        AllowlistApi.setDomains(domains, allowlistDomainsStorage);
    }

    /**
     * Set domain list to {@link invertedAllowlistDomainsStorage}
     *
     * @param domains - array of domains
     */
    public static setInvertedAllowlistDomains(domains: string[]): void {
        AllowlistApi.setDomains(domains, invertedAllowlistDomainsStorage);
    }

    /**
     * Add domain to {@link allowlistDomainsStorage}
     *
     * @param domain - domain string
     */
    public static addAllowlistDomain(domain: string): void {
        AllowlistApi.addDomain(domain, allowlistDomainsStorage);
    }

    /**
     * Add domain to {@link invertedAllowlistDomainsStorage}
     *
     * @param domain - domain string
     */
    public static addInvertedAllowlistDomain(domain: string): void {
        AllowlistApi.addDomain(domain, invertedAllowlistDomainsStorage);
    }

    /**
     * Remove domain from {@link allowlistDomainsStorage}
     *
     * @param domain - domain string
     */
    public static removeAllowlistDomain(domain: string): void {
        AllowlistApi.removeDomain(domain, allowlistDomainsStorage);
    }

    /**
     * Remove domain from {@link invertedAllowlistDomainsStorage}
     *
     * @param domain - domain string
     */
    public static removeInvertedAllowlistDomain(domain: string): void {
        AllowlistApi.removeDomain(domain, invertedAllowlistDomainsStorage);
    }

    /**
     * Gets domain from {@link tswebextension.TabContext}.
     * If default allowlist mode, removes domain from {@link allowlistDomainsStorage}.
     * If inverted allowlist mode, adds domain to {@link invertedAllowlistDomainsStorage}.
     * Updates tswebextension configuration and reload tab after changes apply.
     *
     * @param tabId - tab id
     */
    public static async removeTabUrlFromAllowlist(tabId: number): Promise<void> {
        const mainFrame = tsWebExtTabsApi.getTabMainFrame(tabId);

        if (!mainFrame?.url) {
            return;
        }

        const domain = getHost(mainFrame.url);

        if (!domain) {
            return;
        }

        if (AllowlistApi.isInverted()) {
            AllowlistApi.addInvertedAllowlistDomain(domain);
        } else {
            AllowlistApi.removeAllowlistDomain(domain);
        }

        await Engine.update();

        await browser.tabs.reload(tabId);
    }

    /**
     * Gets domain from {@link tswebextension.TabContext}.
     * If default allowlist mode, adds domain to {@link invertedAllowlistDomainsStorage}.
     * If inverted allowlist mode, removes domain from  {@link allowlistDomainsStorage}.
     * Updates tswebextension configuration and reload tab after changes apply.
     *
     * @param tabId - tab id
     */
    public static async addTabUrlToAllowlist(tabId: number): Promise<void> {
        const mainFrame = tsWebExtTabsApi.getTabMainFrame(tabId);

        if (!mainFrame?.url) {
            return;
        }

        const domain = getHost(mainFrame.url);

        if (!domain) {
            return;
        }

        if (AllowlistApi.isInverted()) {
            AllowlistApi.removeInvertedAllowlistDomain(domain);
        } else {
            AllowlistApi.addAllowlistDomain(domain);
        }

        await Engine.update();

        await browser.tabs.reload(tabId);
    }

    /**
     * Add domain to specified {@link DomainsStorage}
     *
     * @param domain - domain string
     * @param storage - specified {@link DomainsStorage}
     */
    private static addDomain(domain: string, storage: DomainsStorage): void {
        const domains = storage.getData();

        domains.push(domain);

        AllowlistApi.setDomains(domains, storage);
    }

    /**
     * Remove domain to specified storage
     *
     * @param domain - domain string
     * @param storage - specified {@link DomainsStorage}
     */
    private static removeDomain(domain: string, storage: DomainsStorage): void {
        const domains = storage.getData();

        AllowlistApi.setDomains(domains.filter(d => d !== domain), storage);
    }

    /**
     * Get domains from specified storage
     *
     * @param storage - specified {@link DomainsStorage}
     *
     * @returns list of domains
     */
    private static getDomains(storage: DomainsStorage): string[] {
        return storage.getData();
    }

    /**
     * Set domains list to specified storage
     *
     * @param domains - list of domains
     * @param storage - specified {@link DomainsStorage}
     */
    private static setDomains(domains: string[], storage: DomainsStorage): void {
        /**
         * remove empty strings
         */
        domains = domains.filter(domain => !!domain);

        /**
         * remove duplicates
         */
        domains = Array.from(new Set(domains));

        storage.setData(domains);

        listeners.notifyListeners(listeners.UpdateAllowlistFilterRules);
    }

    /**
     * Read stringified domains array from specified allowlist storage,
     * parse it and set memory cache
     *
     * if data is not exist, set default data
     *
     * @param storage - default allowlist or inverted domains storage
     * @param defaultData - default storage data
     */
    private static initStorage(storage: DomainsStorage, defaultData: string[] = []): void {
        try {
            const storageData = storage.read();
            if (typeof storageData === 'string') {
                const data = zod.string().array().parse(JSON.parse(storageData));
                storage.setCache(data);
            } else {
                storage.setData(defaultData);
            }
        } catch (e) {
            Log.warn(`Can't parse ${storage.key} storage data from persisted storage, reset to default`);
            storage.setData(defaultData);
        }
    }
}
