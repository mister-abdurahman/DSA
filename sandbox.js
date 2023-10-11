"use strict";

// palindrome using stack:
// const word = "racecar";
const word = "racecar";
let rword = "";
const stack = [];

for (let x = 0; x < word.length; x++) {
  stack.push(word.at(x));
}
for (let y = 0; y < word.length; y++) {
  rword += stack.pop();
}

if (word === rword) console.log(`${word} is a palindrome`);
else console.log(`${word} is not a palindrome`);
