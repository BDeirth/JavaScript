"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Brianna Deirth
   Date: 03/22/2023  

*/

/* Determine the current date and time */
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = timeStr;

/* Determine the skymap to use for the current date and time */
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (thisMonth*2+thisHour)%24;
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

/* insert the HTML code for the image skymap */
document.getElementById("planisphere").insertAdjacentHTML('afterBegin', imgStr);
