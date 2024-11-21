// 1. 상수 객체 - 상수에 객체를 보관한다 하더라도 프로퍼티를 추가/수정/삭제는 가능하다.
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; //삭제

// 2. 메서드 - 값이 함수인 프로퍼티를 의미한다.
const person = {
  name: "김수현",
  //method선언
  sayHi() {
    console.log("안녕?");
  },
};

person.sayHi();
person["sayHi"]();
