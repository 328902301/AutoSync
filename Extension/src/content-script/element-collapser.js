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

/**
 * Object that collapses or hides DOM elements and able to roll it back.
 */
export const ElementCollapser = (function () {
    /**
     * https://github.com/AdguardTeam/AdguardBrowserExtension/issues/1436
     * Because Edge doesn't support CSS.escape use next function
     *
     * @param value
     * @throws TypeError when non arguments provided.
     */
    const cssEscape = CSS.escape || function (value) {
        if (arguments.length === 0) {
            throw new TypeError('`CSS.escape` requires an argument.');
        }
        const string = String(value);
        const { length } = string;
        let index = -1;
        let codeUnit;
        let result = '';
        const firstCodeUnit = string.charCodeAt(0);
        // eslint-disable-next-line no-plusplus
        while (++index < length) {
            codeUnit = string.charCodeAt(index);
            // Note: there’s no need to special-case astral symbols, surrogate
            // pairs, or lone surrogates.

            // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
            // (U+FFFD).
            if (codeUnit === 0x0000) {
                result += '\uFFFD';
                continue;
            }

            if (
                // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
                // U+007F, […]
                (codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit === 0x007F
                // If the character is the first character and is in the range [0-9]
                // (U+0030 to U+0039), […]
                || (index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039)
                // If the character is the second character and is in the range [0-9]
                // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
                || (
                    index === 1
                    && codeUnit >= 0x0030 && codeUnit <= 0x0039
                    && firstCodeUnit === 0x002D
                )
            ) {
                // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
                result += `\\${codeUnit.toString(16)} `;
                continue;
            }

            if (
                // If the character is the first character and is a `-` (U+002D), and
                // there is no second character, […]
                index === 0
                && length === 1
                && codeUnit === 0x002D
            ) {
                result += `\\${string.charAt(index)}`;
                continue;
            }

            // If the character is not handled by one of the above rules and is
            // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
            // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
            // U+005A), or [a-z] (U+0061 to U+007A), […]
            if (
                codeUnit >= 0x0080
                || codeUnit === 0x002D
                || codeUnit === 0x005F
                || (codeUnit >= 0x0030 && codeUnit <= 0x0039)
                || (codeUnit >= 0x0041 && codeUnit <= 0x005A)
                || (codeUnit >= 0x0061 && codeUnit <= 0x007A)
            ) {
                // the character itself
                result += string.charAt(index);
                continue;
            }

            // Otherwise, the escaped character.
            // https://drafts.csswg.org/cssom/#escape-a-character
            result += `\\${string.charAt(index)}`;
        }
        return result;
    };

    /**
     * The <style> node that contains all the collapsing styles
     */
    let styleNode;

    /**
     * Adds "selectorText { display:none!important; }" style
     *
     * @param selectorText
     * @param cssText optional
     */
    const hideBySelector = function (selectorText, cssText) {
        const rule = `${selectorText}{${cssText || 'display: none!important;'}}`;

        if (!styleNode) {
            styleNode = document.createElement('style');
            styleNode.setAttribute('type', 'text/css');
            (document.head || document.documentElement).appendChild(styleNode);
        }

        styleNode.sheet.insertRule(rule, styleNode.sheet.cssRules.length);
    };

    /**
     * Adds "selectorText { display:none!important; }" style
     *
     * @param selectorText
     * @param tagName
     */
    const hideBySelectorAndTagName = function (selectorText, tagName) {
        if (tagName === 'frame' || tagName === 'iframe') {
            // Use specific style for frames due to these issues:
            // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/346
            // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/355
            // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/347
            // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/733
            hideBySelector(
                selectorText,
                'visibility: hidden!important; height: 0px!important; min-height: 0px!important;',
            );
        } else {
            hideBySelector(selectorText, null);
        }
    };

    /**
     * Creates selector for specified tagName and src attribute
     *
     * @param srcAttrValue
     * @param tagName
     */
    const createSelectorForSrcAttr = function (srcAttrValue, tagName) {
        return `${tagName}[src="${cssEscape(srcAttrValue)}"]`;
    };

    /**
     * Clears priority for specified styles
     *
     * @param {HTMLElement} element element affected
     * @param {Array.<string>} styles array of style names
     */
    const clearElStylesPriority = function (element, styles) {
        const elementStyle = element.style;

        styles.forEach((prop) => {
            const elCssPriority = elementStyle.getPropertyPriority(prop);
            if (elCssPriority && elCssPriority.toLowerCase() === 'important') {
                const elCssValue = elementStyle.getPropertyValue(prop);
                elementStyle.setProperty(prop, elCssValue, null);
            }
        });
    };

    /**
     * Checks if specified element is already collapsed or not.
     * There is a big chance that we've already done it from the background page
     * (see collapseElement method in webrequest.js)
     *
     * @param {HTMLElement} element Element to check
     */
    const isCollapsed = function (element) {
        const computedStyle = window.getComputedStyle(element);
        return (computedStyle && computedStyle.display === 'none');
    };

    /**
     * Collapses the specified element using a CSS style if possible (or inline style if not)
     *
     * @param {HTMLElement} element Element to collapse
     * @param {string} elementUrl Element's source url
     */
    const collapseElement = function (element, elementUrl) {
        if (isCollapsed(element)) {
            return;
        }

        const tagName = element.tagName.toLowerCase();

        if (elementUrl) {
            // Check that element still has the same "src" attribute
            // If it has changed, we do not need to collapse it anymore
            if (element.src === elementUrl) {
                // To not to keep track of changing src for elements, we are going to collapse it with a CSS rule
                // But we take element url, cause current source could be already modified
                // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/408
                const srcAttribute = element.getAttribute('src');
                const srcSelector = createSelectorForSrcAttr(srcAttribute, tagName);
                hideBySelectorAndTagName(srcSelector, tagName);

                // Remove important priority from the element style
                // https://github.com/AdguardTeam/AdguardBrowserExtension/issues/733
                clearElStylesPriority(element, ['display', 'visibility', 'height', 'min-height']);
            }

            // Do not process it further in any case
            return;
        }

        let cssProperty = 'display';
        let cssValue = 'none';
        const cssPriority = 'important';

        if (tagName === 'frame') {
            cssProperty = 'visibility';
            cssValue = 'hidden';
        }

        const elementStyle = element.style;
        const elCssValue = elementStyle.getPropertyValue(cssProperty);
        const elCssPriority = elementStyle.getPropertyPriority(cssProperty);

        // <input type="image"> elements try to load their image again
        // when the "display" CSS property is set. So we have to check
        // that it isn't already collapsed to avoid an infinite recursion.
        if (elCssValue !== cssValue || elCssPriority !== cssPriority) {
            elementStyle.setProperty(cssProperty, cssValue, cssPriority);
        }
    };

    /**
     * Removes the collapser's style node
     */
    const clear = function () {
        if (!styleNode) {
            return;
        }

        styleNode.parentNode.removeChild(styleNode);
    };

    // EXPOSE
    return {
        collapseElement,
        isCollapsed,
        clear,
    };
})();
