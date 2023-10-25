import { Link } from "react-router-dom"

export default function MainFooter() {
  return (
    <>
    <footer className="footer-section">
      <div className="inner">
        <img src="images/logo.png" alt="백두세라믹_로고" width="200px" height="100px" />
        <div className="footer-contents">
          <br />
          <span>대표자명 : 백윤현</span>
          <span>사업자등록번호 : 126-24-10510</span>
          <span>주소 : 경기도 하남시 하남대로 308</span>
          <span>E-mail : 75baek@hanmail.net</span>
          <span style={{"display": "block", "textAlign": "center", "marginTop": "8px"}}>Tel ) 대표번호&nbsp; 031-794-1016 &nbsp;&nbsp;|&nbsp;&nbsp; 시공문의&nbsp; 010-2347-8507 &nbsp;&nbsp;|&nbsp;&nbsp; 자재문의&nbsp; 010-5091-8994</span>
          <p>Copyright © <span style={{"color": "#d7d7d7", "fontWeight": "600", "margin": "0"}}>백두세라믹.</span> All Rights Reserved </p>
            {/* <p><a className="admin_login" href="/?logout">관리자 로그아웃</a></p> */}
            <p><Link className="admin_login" to="/?login">관리자 로그인</Link></p>
        </div>

      </div>
    </footer>
    </>
  )
}