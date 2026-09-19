// ==UserScript==
// @name         HC Top to Bottom
// @namespace    https://viayoo.com/
// @version      v1.4
// @description  try to take over the world!
// @author       Me
// @run-at       document-start
// @match        *://hentai-cosplay-xxx.*/*
// @grant        GM_addStyle
// ==/UserScript==


(function() {
    'use strict';
    GM_addStyle(`
        
#header {
 position: fixed !important;
 height: 38px !important;
 bottom: 0 !important;
 left: 0 !important;
 right: 0 !important;
 top: auto !important;
 z-index: 9997 !important;
 background-color: #000000 !important;
 }

#search {
 z-index: 9999 !important;
 position: fixed !important;
 bottom: 0 !important;
 height: 28px !important;
 border-radius: 0 !important;          
 }

/* Blackout */
#header, body, #entry_list, #entry_list>li, html, #main_contents, #page, #right_sidebar>h3, #detail_list>li, .icon-overlay, #right_sidebar, #detail_list, .view_more_link *, div[id="page_nation"] *, #footer_menu *, #footer_menu>ul>li *, #search {
 background-color: black;
 border: none !important;
 }

/* Text whitening */
#entry_list>li *, #page_nation * {
 color: white !important;
 }

/* Footer centering */
#paginator_area>span, #paginator_area {
 text-align: center !important;
 }

.fa-3x {
 left: 50px !important;
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