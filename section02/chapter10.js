// 1. Date객체를 생성하는 방법
let date1 = new Date(); //생성자
let date2 = new Date("1998-09-30"); //-대신에 . 또는 / 사용 가능

// 2. 타임스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(협정세계시, UTC)로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
let date4 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; //월만 +1
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 3월
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 날짜만
console.log(date1.toLocaleString()); //현지화된 날짜와 시간
