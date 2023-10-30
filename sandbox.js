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
  // this.collection = [];

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
    const firstSet = this.values();

    firstSet.forEach((el) => {
      if (otherSet.has(el)) {
        intersect.add(el);
      }
    });
    return intersect;
  };

  this.difference = function (otherSet) {
    const diffSet = new mySet();
    const firstSet = this.values();

    firstSet.forEach((el) => {
      if (!otherSet.has(el)) {
        diffSet.add(el);
      }
    });
    return diffSet;
  };

  // tests if otherset is a subset of first set
  this.subset = function (otherSet) {
    const firstSet = this.values();

    return firstSet.every((el) => otherSet.has(el));
  };
}

// 17:00
const setA = new mySet();
const setB = new mySet();
setA.add("m");
setA.add("i");
setA.add("d");

setB.add("a");
setB.add("m");
setB.add("i");
setB.add("d");
console.log(setB.intersection(setA).values());

function Queue() {
  const collection = [];

  this.print = function () {
    return collection;
  };
  this.enqueue = function (element) {
    return collection.push(element);
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}
const a = new Queue();
a.enqueue("a");
a.enqueue("i");
a.enqueue("r");
a.dequeue();
console.log(a.print());

// arrange items in a queue based on its priority
function PriorityQueue() {
  const collection = [];

  this.enqueue = function (element) {
    if (collection.length === 0) {
      collection.push(element);
      return collection;
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.print = function () {
    return collection;
  };
}
const pq = new PriorityQueue();
pq.enqueue(["dan", 4]);
pq.enqueue(["mide", 2]);
pq.enqueue(["ara", 1]);
pq.enqueue(["rama", 3]);
console.log(pq.print());

//Binary search tree:

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {}
}
