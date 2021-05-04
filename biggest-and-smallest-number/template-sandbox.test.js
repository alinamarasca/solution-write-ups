"use strict";

/*
function that takes an array of numbers and return both minimum and maximum numbers, in that order.

*/

// first method
function minMax(arr) {
  var returnArr = [];
  var min = arr[0];
  var max = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  returnArr.push(min);
  returnArr.push(max);

  return returnArr;
}

minMax([null, 0, 1]); // returns [null, 1]

// second method

/*
function minMax(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return [arr[0], arr[arr.length - 1]];
}
*/
