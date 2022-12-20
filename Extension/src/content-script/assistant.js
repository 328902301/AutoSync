/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */

import { adguardAssistant } from '@adguard/assistant';

import { contentPage } from './content-script';

export const startAssistant = () => {
    if (global.assistantStarted) {
        return;
    }

    if (window.top !== window || !(document.documentElement instanceof HTMLElement)) {
        return;
    }

    /**
     * `contentPage` may be undefined on the extension startup in FF browser.
     *
     * Different browsers have different strategies of the content scripts
     * injections on extension startup.
     * For example, FF injects content scripts in already opened tabs, but Chrome doesn't do it.
     * In the case of the FF browser, content scripts with the `document_start`
     * option won't injected into opened tabs, so we have to directly check this case.
     */
    if (typeof contentPage === 'undefined') {
        return;
    }

    let assistant;

    // save right-clicked element for assistant
    let clickedEl = null;
    document.addEventListener('mousedown', (event) => {
        if (event.button === 2) {
            clickedEl = event.target;
        }
    });

    contentPage.onMessage.addListener((message) => {
        switch (message.type) {
            case 'initAssistant': {
                const { options } = message;
                const { addRuleCallbackName, token } = options;
                let selectedElement = null;
                if (clickedEl && options.selectElement) {
                    selectedElement = clickedEl;
                }

                if (!assistant) {
                    assistant = adguardAssistant();
                } else {
                    assistant.close();
                }

                assistant.start(selectedElement, (rules) => {
                    contentPage.sendMessage({ type: addRuleCallbackName, data: { token, ruleText: rules } });
                });
                break;
            }
            default:
                break;
        }
    });

    // do not start assistant twice
    global.assistantStarted = true;
};
