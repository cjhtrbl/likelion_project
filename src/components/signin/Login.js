import React from "react";
import { Link } from "react-router-dom";
import "../../css/Login.css"

function Login() {
  return (
    <>
      <div className="login">
        <h1>성균관대학교 기숙사 커뮤니티</h1>

        <img className="logo" alt="logo" src="" />

        <div className="login-input">
          <input className="login-id" type="text" placeholder="아이디" />
          <input className="login-pw" type="text" placeholder="비밀번호" />
        </div>

        <div className="select-btn">
          <span>아이디 찾기</span>
          <span>비밀번호 찾기</span>
          <span>회원가입</span>
        </div>
        <Link to="/signup">
          <div>
            <button className="login-btn">로그인</button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Login;
