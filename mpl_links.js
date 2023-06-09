"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Brianna Deirth
   Date: 04/29/2023  
   
   Filename: mpl_links.js

*/
window.addEventListener("load", function() {

    var allSelect = document.querySelectorAll("form#govLinks select");

  for (var i = 0; i < allSelect.length; i++) {
      allSelect[i].onchange = function(e) {
      location.href = e.target.value;
      }
  }
});
