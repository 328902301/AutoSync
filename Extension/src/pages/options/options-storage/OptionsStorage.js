import { Log } from '../../../common/log';
/**
 * Module used to keep options page settings, which do not need extension level persistence
 */
export class OptionsStorage {
    KEYS = {
        /* allowlist editor wrap setting */
        ALLOWLIST_EDITOR_WRAP: 'allowlist-editor-wrap',

        /**
         * Filtering log columns widths
         */
        COLUMNS_WIDTHS_PX: 'columns-widths-px',

        /**
         * Filtering log columns widths
         */
        COLUMNS_DATA: 'columns-data',

        /**
         * Request modal width
         */
        REQUEST_INFO_MODAL_WIDTH: 'request-info-modal-width',
    };

    DEFAULTS = {
        [this.KEYS.ALLOWLIST_EDITOR_WRAP]: false,
        [this.KEYS.REQUEST_INFO_MODAL_WIDTH]: null,
        [this.KEYS.COLUMNS_DATA]: {
            status: { width: 260 },
            url: { width: 260 },
            type: { width: 100 },
            rule: { width: 260 },
            filter: { width: 260 },
            source: { width: 200 },
        },
    };

    constructor() {
        this.storage = localStorage;
    }

    setItem(key, value) {
        try {
            this.storage.setItem(key, JSON.stringify(value));
        } catch (e) {
            Log.debug(e);
        }
    }

    getItem(key) {
        let storedValue;
        try {
            storedValue = JSON.parse(this.storage.getItem(key));
        } catch (e) {
            Log.debug(e);
            storedValue = null;
        }

        return storedValue === null ? this.DEFAULTS[key] : storedValue;
    }
}
