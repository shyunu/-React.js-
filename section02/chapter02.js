// 단락평가
// : && 연산식과 같은 논리 연산식에서 첫번째 피연산자의 값만으로도 이 연산의 결과를 확정할 수 있다면 두번째 피연산자에는 접근하지 않는 방식

function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

//false (returnTrue함수는 호출조차 되지 않음)
console.log(returnFalse() && returnTrue()); // False 함수 , false

//첫번째 피연산자(true)값만으로는 값이 확정이 나지 않기 때문에 두번째 피연산자도 호출해봐야함
console.log(returnTrue() && returnFalse()); // True 함수, False 함수, false

console.log(returnTrue() || returnFalse()); // True 함수, true

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
printName();
printName({ name: "김수현" });
