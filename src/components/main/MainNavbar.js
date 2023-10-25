import { useState } from "react";
import { Link } from "react-router-dom";


export default function MainNavbar() {

  const [isDown, setIsDown] = useState("");

  const handleMouseOver = () => {
    setIsDown("down");
  }

  const handleMouseOut = () => {
    setIsDown("");
  }

  return (
      <header>
      <div 
        className={"header_wrap " + isDown} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        <div className="header">
          <div className="header_logo">
            <h1 className="logo">
              <Link to="/"><img src="images/logo.png" alt="백두세라믹 로고" width="120px" height="80px" /></Link>
            </h1>
          </div>
          <ul className="header_items">
            <li 
              className="items_list"
              onMouseOver={handleMouseOver}
            >
              <Link className="items_name" to="/?product01/list/&detail_idx=1">점토벽돌</Link>
              <ul
                className={"items_list2 " + isDown} 
              >
                <li>
                  <Link to="/?product01/list/&detail_idx=1">점토벽돌</Link>
                </li>
                <li>
                  <Link to="/?product01/list/&detail_idx=2">와이드벽돌</Link>
                </li>
                <li>
                  <Link to="/?product01/list/&detail_idx=3">전돌</Link>
                </li>
                <li>
                  <Link to="/?product01/list/&detail_idx=4">수입벽돌</Link>
                </li>
                <li>
                  <Link to="/?product01/list/&detail_idx=5">내화벽돌</Link>
                </li>
              </ul>
            </li>
            <li 
              className="items_list"
              onMouseOver={handleMouseOver}
            >
              <Link className="items_name" to="/?product02/list/&detail_idx=1">고벽돌</Link>
              <ul
                className={"items_list2 " + isDown} 
              >
                <li>
                  <Link to="/?product02/list/&detail_idx=1">적고벽돌</Link>
                </li>
                <li>
                  <Link to="/?product02/list/&detail_idx=2">청고벽돌</Link>
                </li>
                <li>
                  <Link to="/?product02/list/&detail_idx=3">백고벽돌</Link>
                </li>
              </ul>
            </li>
            <li 
              className="items_list"
              onMouseOver={handleMouseOver}
            >
              <Link className="items_name" to="/?product03/list/&detail_idx=1">모노벽돌</Link>

            </li>
            <li 
              className="items_list"
              onMouseOver={handleMouseOver}
            >
              <Link className="items_name" to="/?product04/list/&detail_idx=1">벽돌타일</Link>
              <ul
                className={"items_list2 " + isDown} 
              >
                <li>
                  <Link to="/?product04/list/&detail_idx=1">점토타일</Link>
                </li>
                <li>
                  <Link to="/?product04/list/&detail_idx=2">롱점토타일</Link>
                </li>
                <li>
                  <Link to="/?product04/list/&detail_idx=3">세라믹타일</Link>
                </li>
                <li>
                  <Link to="/?product04/list/&detail_idx=4">전돌타일</Link>
                </li>
                <li>
                  <Link to="/?product04/list/&detail_idx=5">현무암타일</Link>
                </li>
                <li>
                  <Link to="/?product04/list/&detail_idx=6">천연석</Link>
                </li>
                <li>
                  <Link to="/?product04/list/&detail_idx=7">인조석</Link>
                </li>
              </ul>
            </li>
            <li 
              className="items_list"
              onMouseOver={handleMouseOver}
            >
              <Link className="items_name" to="/?product05/list/&detail_idx=1">고벽돌타일</Link>
              <ul
                className={"items_list2 " + isDown} 
              >
                <li>
                  <Link to="/?product05/list/&detail_idx=1">적고타일</Link>
                </li>
                <li>
                  <Link to="/?product05/list/&detail_idx=2">청고타일</Link>
                </li>
                <li>
                  <Link to="/?product05/list/&detail_idx=3">백고타일</Link>
                </li>
              </ul>
            </li>

            <li 
              className="items_list"
              onMouseOver={handleMouseOver}
            >
              <Link className="items_name" to="/?product06/list/&detail_idx=1">모노타일</Link>
            </li>
            <li 
              className="items_list"
              onMouseOver={handleMouseOver}
            >
              <Link className="items_name" to="/?product07/list/&detail_idx=1">디자인블럭</Link>
            </li>
            <li className="items_list">
              <Link className="items_name" to="/?product08/list/&detail_idx=1">바닥재</Link>
            </li>
            <li 
              className="items_list"
              onMouseOver={handleMouseOver}
            >
              <Link className="items_name" to="/?product09">시공사례</Link>
            </li>
          </ul>
          <div className="responsive_icon">
            <span className="icon-menu h3"></span>
          </div>
        </div>
      </div>
    </header>
  );
}