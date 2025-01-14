# [Find the Smallest and Biggest Numbers](<[link-to-challenge](https://edabit.com/challenge/Q3n42rEWanZSTmsJm)>)

```
its a function that allows you to find the biggest and smallest number in an array. It returns min and max in that order.

```

## Syntax

> functionName(`type`, `type`, ...) -> `type`
> // minMax('arr') -> 'array' the function will work with array

### Parameters

**paramName**: `paramType`
**arr**: 'array'

```
the parameter name is arr and type of it is an array.
```

### Return Value: `array`

```
returns value is an array , inside of it can be any 'item/element'.
```

## Test Cases

```
test cases from the original challenge

minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]

if you write your own test cases in a sandbox file, include those too

minMax([null, 0, 1]) -> [null, 1]

minMax ([apple, pear, banana]) -> [apple, pear]

```

## Use Cases

```
1. use case:
in data analysis to determine the highest and the lowest number

2. use case:

range of values


what is edge cases?
https://www.geeksforgeeks.org/dont-forget-edge-cases/

This is just a simple an example scenario to remind us that when we writing production level code, we have to be careful with even simple things. By keeping the simple edge cases in mind, and checking with uniform string cases, we increased our test coverage and made our program return more mathematically correct results. ---> triangle example //Remember the rule that in a triangle sum of 2 sides is always greater than the 3rd.

```

---

---

<!-- copy this section for every solution you study -->

<<<<<<< HEAD

## [yoon](https://edabit.com/challenge/Q3n42rEWanZSTmsJm)

=======

## [yoon link](https://edabit.com/challenge/Q3n42rEWanZSTmsJm)

> > > > > > > 93e1edd3b27efe9bfe69e0454a2e68b438c12dab

```js
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
```

### Strategy

```
this problem has two return values (the biggest and smallest) from a list of things given by user.
Inside of this list of thing Yoon compares items in sequence.

```

### Implementation

```
Yoon uses variables to declare the max and min value of array.

for loop statement : The 'for' statement start with a variable i and initializes it to 1. It checks that i is less than the number of options in the function name, perform the succeeding if statement, and increments i by after each pass through the loop.

if statement : checks true or false, numbers than are small than i for min and bigger than i for max.

return statement is needed: push or add the min and max from if statement to returnArr container.


```

### Possible Refactors

```js NOT FOUND ANOTHER WAY TO DO THIS
function minMax(arr) {
  var returnArr = [];
  var min = arr[0];
  var max = arr[0];

  for (var i = 0; i < arr.length; i++) {
    // changed with 0
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
```

### References

```
links that helped you to understand this solution or to think of possible refactors
```

---

> ... maybe even more write-ups?

---

### Remix

```js
// paste your remixed solution here
```

### Strategy

### Implementation

### Possible Refactors

### Inspired By

```
which solutions inspired your solution?
what did you take from each one?
```

### References

---

## Retrospective

```
write any notes to help you review this exercise later, and to help others' study it.

this might include:

- good ideas to use later in your own code
- less good ideas to avoid in your own code
- new vocabulary you learned
- the most important thing(s) you learned
- something that you still don't understand but want to keep studying
- something that surprised you
- tricks you will want to remember and use later
```

## [evan](https://edabit.com/challenge/Q3n42rEWanZSTmsJm)

```js
function minMax(arr) {
  // function name is minMax and type is an array
  arr.sort(function (a, b) {
    return a - b;
  }); // sort method allows to sort elements of an array in place. Besides returning the sorted array, sort method changes the positions of the elements in the original array. By default, the sort method sorts the array elements in ascending order with the smallest value first and largest value last. So that is why here, a = 3, b = 4. This method will do ascending order. SO IT WILL BE [-1,3,4,8,152]

  return [arr[0], arr[arr.length - 1]]; // here it return the 0 index of array and last index of array.
}

minMax([4, 3, 8, 152, -1]); // call function -> result is [-1, 152]
```

### Strategy

```
Evan's strategy is using a sort method where modify the order of the array. This method will do ascending order.
```

### Implementation

```

```
