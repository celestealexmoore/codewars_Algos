/* 
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

function friend(friends) {
  let friendOfMine = [];
  for (let i = 0; i < friends.length; i++) {
    friends[i].length === 4 ? friendOfMine.push(friends[i]) : null;
  }
  return friendOfMine;
}

function friend(friends) {
  return friends.filter((name) => name.length === 4);
}

// if the string at the current index
// does not have a length of === 4 characters (indexes), splice it or whatever removes it.

// create a new object and store the strings that meet requirements into it.
// if the string at the current index has a length of === 4, store in new object.

/* 
Link to Algo:
https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
*/
