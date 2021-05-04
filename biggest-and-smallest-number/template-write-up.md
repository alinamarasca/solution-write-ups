# [Find the Smallest and Biggest Numbers](<[link-to-challenge](https://edabit.com/challenge/Q3n42rEWanZSTmsJm)>)

```
its a function that allows you to find the biggest and smallest number in an array. It returns min and max in that order.

```

## Syntax

> functionName(`type`, `type`, ...) -> `type`
> minMax('arr') -> 'array'

### Parameters

**paramName**: `paramType`
**arr**: 'array' // QUESTION

```
the parameter name is arr and type of it is a number.
```

### Return Value: `array` //QUESTION

```
returns values are numbers, the biggest and smallest from an array.
```

## Test Cases

```
test cases from the original challenge

minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]

if you write your own test cases in a sandbox file, include those too

minMax([null, 0, 1]) -> [null, 1]

```

## Use Cases

```
1. use case:

2. use case:


what is edge cases?
https://www.geeksforgeeks.org/dont-forget-edge-cases/

This is just a simple an example scenario to remind us that when we writing production level code, we have to be careful with even simple things. By keeping the simple edge cases in mind, and checking with uniform string cases, we increased our test coverage and made our program return more mathematically correct results. ---> triangle example //Remember the rule that in a triangle sum of 2 sides is always greater than the 3rd.

```

---

---

<!-- copy this section for every solution you study -->

## [yoon link](https://edabit.com/challenge/Q3n42rEWanZSTmsJm)

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
this problem has two possible arguments and return values (the biggest and smallest from an array). Yoon chose the strategy of declare two variables where store the value of 'for' loop. The iteration of loop goes until reach minimum value and max value. Finally, push the max and min of array to a bigger container that is declare as a variable to show the result.




```

### Implementation

```
Yoon uses variables to declare the max and min value of array.

for loop statement : The 'for' statement start with a variable i and initializes it to 1. It checks that i is less than the number of options in the function name, perform the succeeding if statement, and increments i by after each pass through the loop.

if statement : checks true or false, numbers than are small than i for min and bigger than i for max.

return statement is needed: push or add the min and max from if statement to returnArr container.




```

### Possible Refactors

```
List a couple changes you could make in their code without changing their strategy.
For example:
  `while` loops and `for` loops can often be interchanged.
  `if else`, `switch case` and `_ ? _ : _` can sometimes be interchanged.

You don't need to actually rewrite the function.
The goal of this section is that you exploring different JS language features
and think of different ways to implement the same strategy.
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
