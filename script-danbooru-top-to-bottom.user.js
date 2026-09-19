// ==UserScript==
// @name         Danbooru Top to Bottom
// @namespace    https://viayoo.com/
// @version      v1.2
// @description  try to take over the world!
// @author       Me
// @run-at       document-start
// @match        *://danbooru.donmai.us/*
// @grant        GM_addStyle
// ==/UserScript==


(function() {
    'use strict';

    // Move #top to the bottom of the screen
    GM_addStyle(`
         #top {
            max-height: 33% !important;
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            top: auto !important;
            z-index: 9999 !important;
            background-color: var(--body-background-color, #0a0a0a) !important;
        }

/* Search suggestions up */
#ui-id-1 {
 width: 100% !important;
 position: fixed !important;
 left: 0 !important;
 bottom: 150px !important;
 }

/* Artist Search table stretch */
.name-column {
 width: 100vw !important;
 }

/* Artist search btn right */
input[type="submit"] {
 position: relative !important;
 left: 303px;
 right: auto !important;
 }

/* Fav btn right */
.py-1 {
 position: relative !important;
 left: 342px;
 right: auto !important;
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
