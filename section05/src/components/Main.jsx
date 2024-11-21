import "./Main.css";
// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링된다.
// 3. 모든 태그는 닫혀있어야한다.
// 4. 최상위 태그는 반드시 하나여야한다.
const Main = () => {
  const user = {
    name: "shyunu",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
};

export default Main;
