// ==UserScript==
// @name            Naruto Fandom
// @namespace       NF
// @version         v1
// @description     We love NF
// @author          Zephyrus
// @run-at          document-start
// @match           *://naruto.fandom.*/*
// @grant           GM_addStyle
// ==/UserScript==

(function() {
'use strict';

GM_addStyle(`

/* Force Naruto Fandom infobox content to stay visible */
.infobox.mw-collapsible,
.infobox .mw-collapsible-content,
.infobox tr,
.infobox td,
.infobox th {
    display: table-row !important; /* or block/table-cell depending on depth */
}

.infobox .mw-collapsible-content,
.infobox [style*="display: none"],
.infobox .toollink {
    display: block !important;
    visibility: visible !important;
    height: auto !important;
    max-height: none !important;
    opacity: 1 !important;
}

/* Hide the broken "Show/Hide" toggle button so it doesn't clutter the header */
.infobox .mw-collapsible-toggle,
.infobox .selflink + .mw-collapsible-toggle, .chevron {
    display: none !important;
}

/* Center all text inside the infobox without messing with the display rules */
.infobox, .infobox * {
    text-align: center !important;
}


`);

})();

