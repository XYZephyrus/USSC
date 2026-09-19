// ==UserScript==
// @name         Invert Brute-Force Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Inverts the page colors to force a dark mode
// @match        
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Invert the whole page, but shift hues back to normal
    const css = `
        html {
            filter: invert(1) hue-rotate(180deg) !important;
            background: #fff;
        }
        /* Re-invert media so images/videos look normal */
        img, video, iframe, canvas, [style*="background-image"] {
            filter: invert(1) hue-rotate(180deg) !important;
        }
    `;

    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(css);
    } else {
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }
})();