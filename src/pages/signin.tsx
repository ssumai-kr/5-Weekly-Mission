import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../assets/icon.png';
import googleIcon from '../assets/google.png';
import kakaoIcon from '../assets/kakaotalk.svg';
import './signin.css';

const Signin: React.FC = () => {
  return (
    <div className="signin_body">
      <div className="login_main">
        <form className="signin_form" action="./folder.html" method="post">
          <Link to="/" className="to_home">
            <img src={Icon} alt="Linkbrary 아이콘" />
          </Link>

          <div className="ask_signup">
            <span className="to_signup">회원이 아니신가요? </span>
            <Link to="/signup"> 회원 가입하기</Link>
          </div>

          <div className="inputforms">
            <div className="loginform">
              <label className='label_email'>이메일</label>
              <input name="email" type="email" autoComplete="off" className="email" required />
              <div className="Emailerrormessage"></div>
            </div>

            <div className="passwordform">
              <label className='label_password'>비밀번호</label>
              <div className="main">
                <input name="password" type="password" className="password" required />
                <i className="fa fa-eye fa-lg"></i>
              </div>
              <div className="PWerrormessage"></div>
            </div>
          </div>

          <button className="login_button" type="submit"> 로그인 </button>
        </form>

        <div className="sns_login">
          <p>소셜 로그인</p>
          <div className="SNS">
            <a href="https://www.google.com">
              <img src={googleIcon} alt="google 로그인" className="google" />
            </a>
            <a href="https://www.kakaotalk.com">
              <img src={kakaoIcon} alt="kakaotalk 로그인" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
