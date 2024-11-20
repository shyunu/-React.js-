// 1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  //key : value
  name: "김수현",
  age: 27,
  hobby: "노래듣기",
  job: "junior developer",
  extra: {},
  10: 20,
  // 띄어쓰기가 포함된 문자열 key인 경우에만 "" 로 묶어준다.
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; //--- 점 표기법
let age = person["age"]; //--- 괄호 표기법

console.log(age);


