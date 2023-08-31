/**************************************
 Filename: index.js
 TITLE: Practicing js
 Author: Benjamin Saucedo
 Create Date: 03 September 2021
 Purpose: Practice Using alerts.
 Modification History:
 Original Build
***************************************/

$(function() {
	
//Practicing stuff from the book below.
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening Rylan!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon Rylan!';
} else if (hourNow > 0) {
    greeting = 'Good morning Rylan!';
} else {
    greeting = 'Hola Rylan!';
}

//echo greeting onto page
var elOutput = document.getElementById("hola");
elOutput.innerHTML = '<h2>' + greeting + '</h2>';

});