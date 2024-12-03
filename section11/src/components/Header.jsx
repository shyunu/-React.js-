import "./css/Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>📅 오늘의 할일</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default memo(Header);
