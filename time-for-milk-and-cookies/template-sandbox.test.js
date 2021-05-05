"use strict";

/*

*/
// blerp
function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24; // compare === number
}
// Oosh

function timeForMilkAndCookies(date) {
  return /Dec 24/.test(date + ""); //
}

// Anton

function timeForMilkAndCookies(date) {
  var day = date.getDate();
  var month = date.getMonth();

  if (day == 24 && month == 11) {
    // && operator returns falsy so 24 is correct, 11 month is correct, so it is last element = true
    return true; // can be whatever --> return ("today")
  } else {
    return false; // can be whatever --> return ("not today")
  }
}

//VeryKnave

function timeForMilkAndCookies(date) {
  date = date.toString().split(" "); // split makes an array and separated them -> "Tue"	"Sep"	"24"	"2013"	"00:00:00"	"GMT+0000"	"(UTC)"
  return date[1] == "Dec" && date[2] == 24;
}
timeForMilkAndCookies(new Date(2013, 8, 24));

// Jason

function timeForMilkAndCookies(date) {
  if (date.getMonth() == 11 && date.getDate() == 24) {
    return true;
  } // without else
  return false;
}
