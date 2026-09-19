// ==UserScript==
// @name            GitHub Annoyance
// @namespace       Git
// @version         v1.2
// @description     GH
// @author          Zephyrus
// @run-at          document-start
// @match           *://github.*/*
// @grant           GM_addStyle
// ==/UserScript==

(function() {
'use strict';

GM_addStyle(`

/* Fallback: if the button itself is the direct flex item */
.flex-row > [aria-label*="Sponsor" i] {
  display: none !important;
}

`);
})();

