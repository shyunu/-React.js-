// 1. spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
// one, ...rest : 첫번째로 전달된 인수는 one에 저장되고, 그 이후에 전달되는 인수는 rest배열에 전달된다.
// 주의) Rest 매개변수 뒤에는 추가적으로 매개변수를 선언할 수 없다.
function funcB(one, two, ...rest) {
  console.log(one);
  console.log(rest);
}

funcB(...arr1);
