// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환하는 것

let num = 10;
let str = "20";

const result = num + str; //정수가 묵시적으로 문자열타입으로 형변환됨 "10"+"20"

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시하는 것
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개"; //문자열안에 숫자가 결합된 형태
let strToNum2 = Number(str2); //NaN
let strToNum3 = parseInt(str2); //10 -> 숫자값이 아닌 값을 포함하고 있는 문자열도 숫자로 변환(대신 맨 앞이 숫자로 시작해야함)

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1+ "입니다");
