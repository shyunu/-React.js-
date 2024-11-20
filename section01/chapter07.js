// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자 (산술 + 대입)
let num7 = 10;
// num7 = num7 + 20;
num7 += 20; //num7에 20을 추가해라
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
num8++; //후위 연산
++num8; //전위 연산

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not); //true, false, false

// 6. 비교 연산자
// ==을 사용하게 되면 1 == "1"이 참이라고 나온다
// ===을 사용하여 비교하는 것을 권장함
let comp1 = 1 === 2;
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
