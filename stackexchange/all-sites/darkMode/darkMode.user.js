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
    $('head').append('<style>body.unified-theme, body.unified-theme * { --theme-base-primary-color-h: 210; --theme-base-primary-color-s: 8%; --theme-base-primary-color-l: 25%; --theme-primary-custom-100: hsl(var(--theme-base-primary-color-h),  var(--theme-base-primary-color-s),  calc(var(--theme-base-primary-color-l) + ((100% - var(--theme-base-primary-color-l)) * .9))); --theme-primary-custom-200: hsl(var(--theme-base-primary-color-h),  var(--theme-base-primary-color-s),  calc(var(--theme-base-primary-color-l) + ((100% - var(--theme-base-primary-color-l)) * .75))); --theme-primary-custom-300: hsl(var(--theme-base-primary-color-h),  var(--theme-base-primary-color-s),  calc(var(--theme-base-primary-color-l) + ((100% - var(--theme-base-primary-color-l)) * .5))); --theme-primary-custom-400: hsl(var(--theme-base-primary-color-h),  var(--theme-base-primary-color-s),  var(--theme-base-primary-color-l)); --theme-primary-custom-500: hsl(var(--theme-base-primary-color-h),  var(--theme-base-primary-color-s),  calc(var(--theme-base-primary-color-l) + (var(--theme-base-primary-color-l) * -.3))); --theme-primary-custom-600: hsl(var(--theme-base-primary-color-h),  var(--theme-base-primary-color-s),  calc(var(--theme-base-primary-color-l) + (var(--theme-base-primary-color-l) * -.6))); --theme-primary-custom: var(--theme-primary-custom-400); --theme-button-color: var(--theme-primary); --theme-button-hover-color: var(--theme-primary-400); --theme-button-hover-background-color: var(--theme-primary-100); --theme-button-active-background-color: var(--theme-primary-200); --theme-button-selected-color: var(--theme-primary-600); --theme-button-selected-background-color: var(--theme-primary-300); --theme-button-outlined-border-color: var(--theme-primary-400); --theme-button-outlined-selected-border-color: var(--theme-primary-500); --theme-button-primary-color: var(--white); --theme-button-primary-active-color: var(--white); --theme-button-primary-hover-color: var(--white); --theme-button-primary-selected-color: var(--white); --theme-button-primary-background-color: var(--theme-primary-400); --theme-button-primary-active-background-color: var(--theme-primary-600); --theme-button-primary-hover-background-color: var(--theme-primary-500); --theme-button-primary-selected-background-color: var(--theme-primary-600); --theme-background-color: var(--black-600); --theme-background-position: center 200px; --theme-background-repeat: no-repeat; --theme-background-size: cover; --theme-background-attachment: auto; --theme-content-background-color: var(--white); --theme-content-border-color: var(--black-225); --theme-header-background-color: transparent; --theme-header-background-position: bottom right; --theme-header-background-repeat: no-repeat; --theme-header-background-size: auto; --theme-header-background-border-bottom: 0; --theme-header-link-color: var(--theme-primary); --theme-header-sponsored-color: hsla(0, 0%, 100%, 0.4); --theme-header-foreground-color: transparent; --theme-header-foreground-position: bottom right; --theme-header-foreground-repeat: no-repeat; --theme-header-foreground-size: auto; --theme-footer-background-color: transparent; --theme-footer-background-position: bottom center; --theme-footer-background-repeat: no-repeat; --theme-footer-background-size: 10%; --theme-footer-background-border-top: 0; --theme-footer-title-color: var(--black-350); --theme-footer-text-color: var(--black-350); --theme-footer-link-color: var(--black-350); --theme-footer-link-color-hover: var(--black-300); --theme-footer-divider-color: var(--black-350); --theme-footer-padding-top: 0; --theme-footer-padding-bottom: 100px; --theme-link-color: var(--theme-primary-500); --theme-link-color-hover: var(--theme-primary-600); --theme-link-color-visited: var(--theme-primary-600); --theme-tag-background-color: var(--black-150); --theme-tag-border-color: var(--black-300); --theme-tag-color: var(--black-600); --theme-tag-hover-background-color: var(--black-225); --theme-tag-hover-border-color: var(--black-350); --theme-tag-hover-color: var(--black-600); --theme-tag-required-border-color: var(--black-600); --theme-tag-required-hover-border-color: var(--black-600); --theme-body-font-family: var(--ff-sans); --theme-body-font-color: var(--black-600); --theme-post-title-font-family: var(--ff-sans); --theme-post-title-color: var(--theme-primary-500); --theme-post-title-color-hover: var(--theme-primary-600); --theme-post-title-color-visited: var(--theme-primary-400); --theme-post-body-font-family: var(--ff-sans); --theme-post-owner-background-color: var(--theme-primary-100); --theme-post-owner-new-background-color: var(--theme-primary-200); --theme-topbar-bottom-border: none; }</style>');
  });
})();
