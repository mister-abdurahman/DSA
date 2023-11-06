// Remove Duplicates from Sorted Array

// Mine: gives same(better) result as leetcode's but yet leetcode doesnt approve
// const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// expected output = [0,1,2,3,4,_,_,_,_,_]

function removeDuplicates(input) {
  let xtra = 0;
  let k = 0;
  const container = [];
  for (let x = 0; x < input.length; x++) {
    if (container.includes(input[x])) {
      xtra++;
    } else {
      k++;
      container.push(input[x]);
    }
  }
  for (let y = 0; y < xtra; y++) {
    container.splice(container.length, 0, "_");
  }
  return { k, nums: container };
}
// console.log(removeDuplicates([1, 2, 2]));

// Leetcode solution:
var removeDuplicates = function (nums) {
  let insertIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    // When we find a number thats different from its preceeding number, assign index of insertIndex to nums and
    //       increment insertIndex by 1
    if (nums[i - 1] != nums[i]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  return insertIndex;
};
// console.log(removeDuplicates([1, 2, 2]));

// Best Time to Buy and Sell Stock II
// My Solution 🌟
function BuyStock(prices) {
  let boughtStock = 0;
  let profit = 0;
  let bought = false;

  for (let x = 1; x < prices.length; x++) {
    // buy
    if (!bought) {
      if (x == prices.length - 1) {
        if (prices[x - 1] < prices[x]) {
          boughtStock = prices[x - 1];
          profit += prices[x] - boughtStock;
          bought = true;
        }
      }
      if (prices[x - 1] < prices[x]) {
        boughtStock = prices[x - 1];
        bought = true;
      } else if (prices[x - 1] > prices[x]) {
        boughtStock = prices[x];
        bought = true;
      }
    }
    // sell
    else {
      if (prices[x - 1] > prices[x]) {
        profit += prices[x - 1] - boughtStock;
        boughtStock = 0;
        bought = false;
      } else if (prices[x - 1] < prices[x]) {
        profit += prices[x] - boughtStock;
        boughtStock = 0;
        bought = false;
      }
    }
  }
  return profit;
}
// console.log(BuyStock([7, 1, 5, 3, 6, 4]));
// console.log(BuyStock([1, 2, 3, 4, 5]));
// console.log(BuyStock([7, 6, 4, 3, 1]));
// console.log(BuyStock([6, 1, 3, 2, 4, 7]));
// console.log(BuyStock([2, 2, 5]));

// Rotate Array
const numbers = [1, 2, 3, 4, 5, 6, 7]; //3
// output = [5,6,7,1,2,3,4]

function RotateArray(nums, k) {
  k = k % nums.length;
  let y = nums.length - k;
  for (let x = 0; x < nums.length; x++) {
    if (x < k) {
      nums.splice(x, 0, nums[y + x]);
      y += 1;
      //   nums.pop();
    } else break;
  }
  nums.splice(nums.length - k, k);
  return nums;
}
// console.log(RotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// letcoder solution ✔:
var rotate = function (nums, k) {
  const len = nums.length;
  k = k % len;

  let end = nums.splice(len - k);
  nums.splice(0, 0, ...end);
  return nums;
};
// console.log(rotate([1, 2, 3], 4));
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// Contains Duplicate
// nums = [1,2,3,1]

// Mine ⭐
function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length ? true : false;
}
// console.log(containsDuplicate([1, 2, 3, 4]));

// Leetcoder
function containsDuplicate1(nums) {
  const hashMap = {};

  for (let x = 0; x < nums.length; x++) {
    if (hashMap[nums[x]] === true) {
      return true;
    } else {
      hashMap[nums[x]] = true;
    }
  }
  return false;
}
// console.log(containsDuplicate1([1, 2, 3, 4, 2, 2]));

// Single Number

const data = [2, 2, 1];
// expected: 1

function singleNumber(nums) {
  const hashMap = {};
  for (let x = 0; x < nums.length; x++) {
    if (hashMap[nums[x]]) {
      hashMap[nums[x]]++;
    } else {
      hashMap[nums[x]] = 1;
    }
  }
  // return hashMap;
  for (const [key, value] of Object.entries(hashMap)) {
    if (value === 1) return key;
  }
}
// console.log(singleNumber([2, 2, 1]));

// Intersection of 2 arrays:

// Leetcoder 🌟
function longOrShort(nums1, nums2) {
  if (nums1.length <= nums2.length)
    return IntersectionOfTwoArrays(nums1, nums2);
  else return IntersectionOfTwoArrays(nums2, nums1);
}

var IntersectionOfTwoArrays = function (nums1, nums2) {
  const res = [];
  nums1.map((item) => {
    if (nums2.includes(item)) {
      res.push(item);
      nums2.splice(nums2.indexOf(item), 1);
    }
  });
  return res;
};

// function IntersectionOfTwoArrays1(nums1, nums2) {
//   const res = [];
//   const shorterOne = nums1.length < nums2.length ? nums1 : nums2;
//   const longerOne = nums1.length > nums2.length ? nums1 : nums2;

//   shorterOne.map((item) => {
//     if (longerOne.includes(item)) {
//       res.push(item);
//       longerOne.splice(longerOne.indexOf(item), 1);
//     }
//   });

//   return res;
// }
// console.log(IntersectionOfTwoArrays([1, 2, 2, 1], [2, 2]));
// console.log(longOrShort([1, 2, 2, 1], [2, 2]));
