import "./css/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3>📅 오늘의 할일</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
