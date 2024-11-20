// 1. 함수 표현식

function funcA() {
  // console.log("funcA");
}

let varA = funcA;
// console.log(varA);
varA();

let varB = function () {
  //이름이 없는 함수 : 익명함수
  // console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
}; 
console.log(varC(2));
