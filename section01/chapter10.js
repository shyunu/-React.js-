// for문: for(초기식; 조건식; 증감식;)
for (let idx = 0; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; //아래코드는 실행하지않고 다시 반복문으로 이동
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
