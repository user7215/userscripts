// ==UserScript==
// @name         Universal Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds universal-ish dark mode to Stack Exchange
// @author       cocomac, user7215
// @match        *://stackapps.com/*
// @match        *://*.stackapps.com/*
// @match        *://*.stackexchange.com/*
// @match        *://stackoverflow.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://askubuntu.com/*
// @match        *://*.askubuntu.com/*
// @match        *://superuser.com/*
// @match        *://*.superuser.com/*
// @match        *://stackexchange.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  $(() => {
    $("body").addClass("theme-dark");
    document.getElementById("left-sidebar").style.background = "#2d2e2f";
    document.getElementsByTagName("body")[0].style.background = "#2d2e2f";
    $('head').append('<link rel="stylesheet" href="https://sound.stackexchange.com/Content/Sites/sound/primary.css?v=d1db3ebc75c9"/>');
  });
})();
