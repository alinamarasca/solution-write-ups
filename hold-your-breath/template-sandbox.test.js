"use strict";

/*
hold your breath 
*/


// Our solution 
function divingMinigame(arr) {
let altitude = arr;
let lives = 10;
//let goingThere = "";
for (let i = 0; i < altitude.length; i++) {
  if (altitude[i] < 0) {
    lives -= 2;
  } else {
    lives += 4;
  }
}
  if (lives > 10) {
    lives = 10;
  } else {
    return false;
  }
return true; 
}

divingMinigame ([2, -7, 0, 5, -9]);


//we need altitude
//we need lives
// stepper to go throught array
// loop while or for - two exits (one to live  or die)
// thing for limit our live, maximum 10


// 1 
const divingMinigame = arr => {
	let meter = 10;
	for(let i = 0; i < arr.length; i++) {
		const item = arr[i];
		if (item < 0) meter -= 2;
		else meter = Math.min(meter + 4, 10);
		if (meter <= 0) return false;
	}
	return true;

// 2 

function divingMinigame(arr) {
  let breath = 10;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      breath -= 2;
    } else {
      breath += 4;
    }
    if (breath > 10) {
      breath = 10;
    }
    if (breath <= 0) {
      return false;
    }
  }
  return true;
}

// 3

const divingMinigame = r => {
	let x = 8;
	for (let i = 0; i < r.length; i++) {
		if (r[i] < 0) x -= 2;
		else x += 4;
		if (x > 10) x = 10;
		if (x < 1 && (r[i+1] < 0 || r[i+1] === undefined)) return false;
	}
	return true;
};

//4

const divingMinigame = a =>
 a.filter(b => b < 0).length < 5 ||a.filter(b => b < 0).length > 7;

 //5
