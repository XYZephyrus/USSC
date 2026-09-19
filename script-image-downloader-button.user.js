// ==UserScript==
// @name         Image Downloader
// @namespace    https://openuserjs.org/
// @version      0.1
// @description  A simple script to generate download link for all images
// @author       Jefreesujit
// @copyright 2020, Jefreesujit (https://openuserjs.org/users/Jefreesujit)
// @license MIT
// @include http://*/*
// @include https://*/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  setTimeout(function () {
    document.querySelectorAll('img').forEach(el => el.insertAdjacentHTML(
      'afterend', `<a href="${el.src}" style="background:white;padding:2px;" target="_blank">Download</a>`));
  }, 5000);
})();
