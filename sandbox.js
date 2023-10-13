"use strict";

// STACK: like a stack of books

// palindrome using (array) stack:
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

// creating and using a stack:
function Stack() {
  this.count = 0;
  this.storage = {};

  // Adds a value to the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };
  // removes a value from the stack
  this.pop = function () {
    if (this.count === 0) return "Stack is Empty";

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  this.size = function () {
    return this.count;
  };
  this.peek = function () {
    return this.storage[this.count - 1];
  };
}

const myStack = new Stack();
myStack.push("a");
myStack.push("i");
myStack.push("r");
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("r");
console.log(myStack.size());
console.log(myStack);

// SETS
// works like an array but there are no duplicate items

// es6 has some inbuilt set methds but lets make our own set.

function mySet() {
  const collection = [];

  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };
  this.values = function () {
    return collection;
  };
  this.add = function (element) {
    if (this.has(element)) return false;
    else {
      collection.push(element);
      return true;
    }
  };
  this.remove = function (element) {
    if (!this.has(element)) return false;
    else {
      const index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
  };
  this.size = function () {
    return collection.length;
  };
  // method to add 2 sets
  this.union = function (secondSet) {
    const unionSet = new mySet();
    const firstSet = this.values();
    const secSet = secondSet.values();
    firstSet.forEach((el) => unionSet.add(el));
    secSet.forEach((el) => unionSet.add(el));
    return unionSet;
  };
  // return the intersection of 2 sets as a new set
  this.intersection = function (otherSet) {
    const intersect = new mySet();
    const setA = this.values();
    intersecfirst.forEach((el) => setA.add(el));
    return setA;
  };
}
