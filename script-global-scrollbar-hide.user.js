// ==UserScript==
// @name         Global Scrollbar Hide
// @namespace    github.com/XYZephyrus
// @version      1.0
// @description  Hides the ugly Chromium system scrollbars completely
// @author       Gemini
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Inject CSS to hide scrollbars globally for standard elements and WebKit engines
    const css = `
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
        }

        /* Hide scrollbar for IE, Edge and Firefox (Just in case) */
        html, body {
            -ms-overflow-style: none !important;  /* IE and Edge */
            scrollbar-width: none !important;  /* Firefox */
        }
    `;

    const styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    styleEl.appendChild(document.createTextNode(css));
    
    // Attach to the page as fast as humanly possible
    (document.head || document.documentElement).appendChild(styleEl);
})();