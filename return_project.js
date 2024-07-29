/* Part 1 - Combine Those Strings */
function combineStrings(string1, string2) {
  return string1 + string2;
}

let s1 = combineStrings('ABC', 'DEF');
let s2 = combineStrings('poke', 'mon');
let s3 = combineStrings('friend', 'ship');
let s4 = combineStrings('1', '2');

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 2 - Trace the Output */

/* Program #1: */
// Output:
// [ 'a', 'b', 'c' ]
// [ 'panda', 'bee', 'squirrel' ]
// [ 55, 100, -7 ]

/* Program #2: */
// Output:
// 1
// 5
// 0

/* Program #3: */
// Output:
// 2.5
// 15
// 5

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 3 - Math-Checker */
function checkAnswer(num1, num2, operator, answer) {
  if (operator === '+') {
    return num1 + num2 == answer;
  } else {
    return num1 - num2 == answer;
  }
}

let b1 = checkAnswer(3, 5, '+', 8);
let b2 = checkAnswer(9, 8, '+', 15);
let b3 = checkAnswer(5, 4, '-', 1);
let b4 = checkAnswer(0, 1, '-', -2);

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 4 - FUNCTION + PARAMETER + FOR LOOP + ARRAY + INDEX + RETURN + GO FOR IT!!! */
function oddNumberCatcher(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      return i;
    }
  }
  return -1;
}

let i1 = oddNumberCatcher([8, 22, 10, 15, 2, 50, 28]);
let i2 = oddNumberCatcher([1, 2, 3, 4, 5]);
let i3 = oddNumberCatcher([2, 2, 2, 2, 2, 2, 2, 2]);
let i4 = oddNumberCatcher([]);

console.log(i1);
console.log(i2);
console.log(i3);
console.log(i4);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Extra Credit - Large, Larger, Largest */
/* Task #1: */
function larger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(larger(1, 2));
console.log(larger(25, 15));
console.log(larger(0, -5));

/* Task #2: */
function largest(num1, num2, num3, num4) {
  return larger(larger(num1, num2), larger(num3, num4));
}

console.log(largest(1, 2, 3, 4));
console.log(largest(-9, -20, 0, -11));
console.log(largest(100, 100, 10, 10));
