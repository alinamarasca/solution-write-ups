# [Hold Your Breath!](https://edabit.com/challenge/KxMhoaDkyC2CiNGQx)

```
We have 10 points. Given random numbers if number is negative we subtract 2 points and if it is positive we add 4 points. We cap our points to 10.
```

## Syntax

> functionName(`type`, `type`, ...) -> `type`
> divingMinigame (arr) -> array

### Parameters

**paramName**: `paramType`
**arr**: array

```
parameter is array with positive and negative numbers.
```

### Return Value: `boolean`

```
we return true or false value
```

## Test Cases

```
divingMinigame([-5, -15, -4, 0, 5]) ➞ true

// Breath meter starts at 10.
// -5 is below water, so breath meter decreases to 8.
// -15 is below water, so breath meter decreases to 6.
// -4 is below water, so breath meter decreases to 4.
// 0 is at sea level, so breath meter increases to 8.
// 5 is above sea level and breath meter is capped at 10 (would've been 12 otherwise).
// Character survives!
```

## Use Cases

```
1.
video game which counts lives

2.
to compare kind of color to get in the end (negative = yellow and positive = green)


```

---

---

<!-- copy this section for every solution you study -->

## [ABO](https://edabit.com/challenge/KxMhoaDkyC2CiNGQx)

```js
// paste their solution here
```

### Strategy

```
He compares given numbers in sequences and subtracts 2 points if numbers are negative and add 4 points if numbers are positive. If we get more than 10 he caps to 10.

```

### Implementation

```
he creates variables for breath and stepper
he creates stepper to go through array
he subtracts and adds points depending of value (positive or negative)
If breath is more than 10 he caps to 10.
he returns false if breaths are 0 or negative and he returns true if breaths are more than 0.

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
