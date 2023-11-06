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
const aaa = new Queue();
aaa.enqueue("aaa");
aaa.enqueue("i");
aaa.enqueue("r");
aaa.dequeue();
console.log(aaa.print());

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

// SetTimer that prints elements of an array every 500ms.
const theArray = [1, 2, 3, 4, 5];

// function theFn() {
//   theArray.forEach((el) => console.log(el));
// }

// setInterval(theFn, 1000);

let currentIndex = 0;
function tets() {
  if (currentIndex < theArray.length) {
    console.log(theArray[currentIndex]);
    currentIndex++;
  } else {
    clearInterval(intervalId);
  }
}

// const intervalId = setInterval(tets, 1000);

// const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
// let currentIndex = 0;

// function printNextItem() {
//   if (currentIndex < items.length) {
//     console.log(items[currentIndex]);
//     currentIndex++;
//   } else {
//     // If all items are printed, clear the interval
//     clearInterval(intervalId);
//   }
// }

// Set up the interval to call the printNextItem function every 1 second
// const intervalId = setInterval(printNextItem, 1000);

// turing test:
const test1 = ["5", "2", "C", "D", "+"];
// ans = 30
// c : pop last score
// d : record new score that is doble previous score
// + : record new score that is sum of last 2 previous scores

function Mock(ops) {
  const ans = [];
  for (let x = 0; x < ops.length; x++) {
    if (ops[x] !== "C" && ops[x] !== "D" && ops[x] !== "+") {
      ans.push(parseInt(ops[x]));
    }
    if (ops[x] === "C") {
      ans.pop();
    }
    if (ops[x] === "D") {
      ans.push(parseInt(ans[ans.length - 1]) * 2);
    }
    if (ops[x] === "+") {
      // console.log(ops[x]);
      ans.push(parseInt(ans[ans.length - 1]) + parseInt(ans[ans.length - 2]));
    }
  }

  // return ans;
  return ans.reduce((acc, cur) => acc + cur, 0);
}

// console.log(Mock(test1));
// console.log(Mock([5, -2, 4, "C", "D", 9, "+", "+"]));

const testData1 = "popokpo";
const testData2 = "po";
// answer = 2

function tunko(sentence, word) {
  let count = 0;
  let wordTracker = 0;

  for (let x = 0; x < sentence.length; x++) {
    if (sentence[x] === word[wordTracker]) {
      wordTracker++;
      if (wordTracker === word.length) {
        count++;
        wordTracker = 0;
      }
    } else if (count > 0) return count;
  }
  return count;
}
// console.log(tunko(testData1, testData2));

function countSimultaneousOccurrences(sentence, word) {
  let count = 0;
  let sentenceIndex = 0; //is used to track the completion of a successfull comparision

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === word[sentenceIndex]) {
      sentenceIndex++;
      if (sentenceIndex === word.length) {
        count++;
        sentenceIndex = 0;
      }
    } else if (count > 0) return count;
  }
  return count;
}

// Example usage:
const sentence = "popokpo";
const word1 = "po";
// const result = countSimultaneousOccurrences(sentence, word1);
// console.log(result); // Output: 2

// Persons with same properties:
const k = [
  ["male", "jake", 19],
  ["female", "jane", 14],
  ["female", "jessica", 39],
];
const a = "gender"; //gender, name, age
const b = "male";
// output: 1

function sameProperties(k, a, b) {
  let count = 0;

  for (let i = 0; i < k.length; i++) {
    if (a === "gender") {
      if (k[i][0] === b) count++;
    }
    if (a === "name") {
      if (k[i][1] === b) count++;
    }
    if (a === "age") {
      if (k[i][2] === b) count++;
    }
  }
  return count;
}
console.log(
  sameProperties(
    [
      ["male", "jake", 19],
      ["female", "jane", 14],
      ["female", "jessica", 39],
    ],
    "gender",
    "male"
  )
);
