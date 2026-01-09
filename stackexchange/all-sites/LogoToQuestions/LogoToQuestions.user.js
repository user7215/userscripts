/* eslint-disable userscripts/avoid-regexp-include */

// ==UserScript==
// @name         Logo -> Questions
// @namespace    http://tampermonkey.net/
// @version      2026-01-09
// @description  try to take over the world!
// @author       user7215
// @include /^https?:\/\/([a-z0-9-]+\.stackexchange\.com|stackoverflow\.com|superuser\.com|askubuntu\.com|serverfault\.com|mathoverflow\.net|stackapps\.com)\/?.*$/
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAAAAAB5Gfe6AAAEgUlEQVR4nO3d228VVRzF8e9Z3UEKtV6DilUuJvqiURQFCg8aoTVtE+iZeTAx8b/w1T/Ev2CfthRKq0VTMUhJxEsC4gWNRkiaBooXsEAb7MV/YM6LZ1pnZvF5PCv7N+nK9LZnn5zao3gT5oQ5YU6YE+aEOWFOmBPmhDlhTpgT5oQ5YU6YE+aEOWFOmBPmhDlhTpgT5oQ5YU6YE+aEOWFOmBPmhDlhTpgT5oQ5YU6YE+aEOWFOmBPmhDlhTpgT5oQ5YU6YE+aEOWFOmBPmhDlhTpgT5oQ5YU6YE+aEOWFOmBPmhDlhTpgT5oQ5YU6YE+aEOWFOmBPmhDlhTpgT5oQ5YU6YE+aEOWFOmBPmhDlhTpgT5oQ5YU6YE+aEubZNLSz+YOvlBUqu1srnDH2yc2kqnl3FuABgpjFyHecCYPlUPLOCcQHA7PDQNZwLgOXT8fQyxgUAV4eHZ3EuAFbOxFPLzgUAcyNDMzgXAKtn49QSFn8J9jyV9Wrt6b63H5q5iUEBx6ZXt23ICjbtfvfVu5dXKv8tALT3pntq2dGfo43fqHwBQFe93tUk+jKevEvlC4DanrS3PTu6cSz+SuULADb3pa80ib6OJxepfAHAjmTwsezk5lj8meoXADqQHsz8rQDn44cL1S8AeGAgfSE7mT8Rf6T6BQDPpocfyU6+jRN3qH4B0PZ6+kbITG6Px++ofgHAw4fT57KT7xtjt6l+AcDz6cCDmcHCRLyAQQGw4c30QFtmcimOzVP9AoAt9Xrm/8wsfvT+okMBwK60vyPr9X3XTQqAjb3p3ppzAcCT9aTLugCovZa+1V68ArRuV1o99173CQonrN+lttUHt2JbwOa+ZDdFFNbjItqb9DTZMXIoYHt98AkKK6zx/I6+JHurbHFyvvoFaF+9d2NmcqlxvBhfP2tYwPbkSPatvzDROE9RhDWa29GfvJyd/NAYuwXVLkDd9Z7sW//OeLxIoYT8R+5IjjyenVyM44XbEww5z7u/P9mVndwaK+SucMhzmLqTQ9m3PhfiRDGfC4T8Ru2sN3sy9PdY/ImCCjnN6exPXmoSfRMnC7H5tYYFaH9y6L7s6Mbx+AtFFlof8Ux9cEuT6Ks4WfTzAaHF9Z0DyYtNor9GYwlOiIRWFrftTw42ufVXv2h8/A9UvIBGs597fxxtXKEcQiuLOyn/OcGQ98C5o41SnRQNuU5bmY6fluyscMhx1rXhofKdFg95DSrr+wVCPmNmR4auUkohhxnLn8XPS3EueG0KmBkamaO8QmvLl6Ya0+V+32BoZfGV0ZHfKbnauj0eLyhhTpgT5oQ5YU6YE+aEOWFOmBPmhDlhTpgT5oQ5YU6YE+aEOWFOmBPmhDlhTpgT5sL/fP28ztG+c+4/LhTmhDlhTpgT5oQ5Ya5274yQOWFOmBPmhDlhTpgT5oQ5YU6YE+aEOWFOmBPmhDlhTpgT5oQ5YU6YE+aEOWFOmBPmhDlhTpgT5oQ5YU6YE+aEOWFOmBPmhDlhTpgT5oQ5YU6YE+aEOWFOmBPmhDlhTpi7VwDm/gXvfd7nBjQlGwAAAABJRU5ErkJggg==
// @grant        none
// ==/UserScript==



(function() {
    'use strict';
    $(document).ready(function(){ // eslint-disable-line
        let a = document.getElementsByClassName("h-auto wmx100")[0].parentElement;
        a.href = location.origin + "/questions";
   })
})();
