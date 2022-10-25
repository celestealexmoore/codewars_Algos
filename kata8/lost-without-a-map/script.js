/* 

DESCRIPTION:
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/

function maps(x) {
  let newArray = [];
  for (let i = 0; i < x.length; i++) {
    newArray.push(x[i] * 2);
  }
  return newArray;
}

function maps(x) {
  return x.map((n) => n * 2);
}

/* 
Link to Algo:
https://www.codewars.com/kata/57f781872e3d8ca2a000007e
*/
