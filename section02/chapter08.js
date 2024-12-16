// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// console.log(doubledArr); // [2,4,6]

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드 (true, false)
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index = arr3.indexOf(20); // -1(없으면 -1)

let objectArr = [{ name: "shyunu" }, { name: "수현" }];

// indexOf : 객체값을 찾지는 못함
// console.log(objectArr.indexOf({ name: "shyunu" })); // -1

// findIndex : 객체값도 찾을 수 있음
// console.log(objectArr.findIndex((item) => item.name === "shyunu")); // 0

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item % 2 !== 0);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "shyunu" }, { name: "수현 " }];

const finded = arr5.find((item) => item.name === "shyunu");
console.log(finded);
