/* 
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n) {
  n = parseInt(Array.from(String(n), Number).sort().reverse().join(""));
  return n;
}

descendingOrder(1234)

/* 
  Link to Algo:
  https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
   */
