// ==UserScript==
// @name            DarkReader
// @namespace     https://github.com/XYZephyrus/ZEUS
// @version         v1
// @description     NA
// @author          Zephyrus
// @run-at          document-end
// @match         *://*/* 
// @require         https://cdn.jsdelivr.net/npm/darkreader@4.9.58/darkreader.js
// ==/UserScript==

(function() {
    DarkReader.setFetchMethod(window.fetch);
    DarkReader.enable({
        brightness: 100,
        contrast: 120,
        sepia: 0,
        saturation: 0
    });
})();

