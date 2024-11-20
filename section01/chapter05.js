// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; //inf: 양의 무한대
let minf = -Infinity; //minf: 음의 무한대

let nan = NaN; //nan: not a number

// 2. String Type
let myName = "김수현";
let myLocation = "휘경동";
let introduct = myName + myLocation; //문자열은 덧셈연산을 지원한다.

let introductText = `${myName}은 ${myLocation}에 거주합니다` // 백틱: $(달러사인)과 중괄호를 통해서 변수의 값을 동적으로 문자열에 포함시킬 수 있다.
// console.log(introductText); // 콘솔) 김수현은 휘경동에 거주합니다

// 템플릿 리터럴 문법

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
console.log(none);
