# [challengeName](link-to-challenge)

```
we want a function to accepts a date object and returns true if it's matches. Otherwise returns false. "Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0."
```

## Syntax

> functionName(`type`, `type`, ...) -> `type`

```

functionName is timeForMilkAndCookies, type is date
```

### Parameters

**paramName**: `paramType`

```
paramName is date and paramType is date
```

### Return Value: `type`

```
type of return value is boolean, in this case true
```

## Test Cases

```
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true


```

## Use Cases

```

1. use case:
to see if the event "black friday" is today,

2. use case:

reminder of anything

```

---

---

<!-- copy this section for every solution you study -->

## [blerp](https://edabit.com/challenge/hPWnaSckJke5FXNEH)

```js
  function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24; // compare === number

```

### Strategy

```
blerp compares the given date to arranged date
```

### Implementation

```
He uses date 'getMonth()'/'getDate()' method from Js for month and day to compare the input with specific month and day, after it he returns boolean value of comparison.
```

### Possible Refactors

```
// 1
function timeForMilkAndCookies(date) {
  var day = date.getDate();
  var month = date.getMonth();

  if(day == 24 && month == 11) {
    return true
  } else {
    return false
  }
}
// 2
const timeForMilkAndCookies = date => date.getMonth() === 11 && date.getDate() === 24

//3

function timeForMilkAndCookies(date) {
  if (date.getMonth() == 11 && date.getDate() == 24) {
    return true;
  } // without else
  return false;
}

```

### References

```
[w3schools](https://www.w3schools.com/jsref/jsref_getdate.asp)
```

---

> ... maybe even more write-ups?

---

### Second favorite option

[VeryKnave](https://edabit.com/challenge/hPWnaSckJke5FXNEH)

```js
function timeForMilkAndCookies(date) {
  date = date.toString().split(" "); // split makes an array and separated them -> "Tue"	"Sep"	"24"	"2013"	"00:00:00"	"GMT+0000"	"(UTC)"
  return date[1] == "Dec" && date[2] == 24;
}
timeForMilkAndCookies(new Date(2013, 8, 24));
```

### Strategy

VeryKnave compares the given date to arranged date

### Implementation

He uses .split() method and date.toString() method to take input date and split them into elements of array. So he can compares the index element with value which is equal in this case to "Dec" and 24. (computer interpretation for value Dec and 24).

### Possible Refactors

### References

---

## Retrospective

```
- not writing else statement

- use more Js methods like: 'getDate()', 'date.toString(), '.split()'...

- we learn how computer interpreters the date

- we learn how to make an array from the input

```
