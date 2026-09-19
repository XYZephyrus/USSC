// ==UserScript==
// @name         MissKon Top to Bottom
// @namespace    https://viayoo.com/
// @version      1
// @description  try to take over the world!
// @author       Me
// @run-at       document-start
// @match        *://misskon.*/*
// @grant        GM_addStyle
// ==/UserScript==


(function() {
    'use strict';

    // Move #top to the bottom of the screen
    GM_addStyle(`
        #s {
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            top: auto !important;
            z-index: 9999 !important;
            background-color: var(--body-background-color, #0a0a0a) !important;
            border-top: 1px solid var(--border-color, #333) !important;
            border-bottom: none !important;
        }

#topcontrol {
 position: fixed !important;
 bottom: 50px !important;
 }

        /* Prevent the bottom of the page from being hidden behind the bar */
        body {
            padding-bottom: 60px !important;
        }

        /* Fix submenus/mobile nav popping up instead of down */
        #top .nav-menu, 
        #top [x-show="menuOpen"] {
            bottom: 100% !important;
            top: auto !important;
        }
    `);
})();