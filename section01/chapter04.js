// 1. 변수
// 초기화 이후에 값을 수정할 수 있다.
let age;

age = 30;

// 2. 상수
// 생일처럼 변할 수 없거나, 변하지 말아야하는 값을 지정할 때 사용하고
// 선언할 때 초기화가 반드시 필요하다
const birth = "1997.01.07";

// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// ex) let if

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
