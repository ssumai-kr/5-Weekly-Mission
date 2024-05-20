import React from 'react';
import './signup.css';
import Icon from "../assets/icon.png";
import { Link } from 'react-router-dom';
import googleIcon from '../assets/google.png';
import kakaoIcon from '../assets/kakaotalk.svg';

const Signup: React.FC = () => {
  return (
    <div className="signup_body">
      <div className="signup_main">
        <form className="signup_form">
          <div className="siginup_form__container">
            <div>
              <Link to="/" className="to_home">
                <img src={Icon} alt="Linkbrary 아이콘" />
              </Link>
              <div className="ask_signin">
                <span className="to_signin">이미 회원이신가요? </span>
                <Link to="/signin"> 로그인 하기</Link>
              </div>
            </div>
            <div className="inputforms">
              <div>
                <div className="loginform">
                  <label className='label'>이메일</label>
                  <input name="email" type="email" autoComplete="off" className="email" required />
                  <div className="Emailerrormessage"></div>
                </div>
                <div className="passwordform">
                  <label className='label'>비밀번호</label>
                  <div className="main">
                    <input name="password" type="password" className="password" required />
                    <i className="fa fa-eye fa-lg"></i>
                  </div>
                  <div className="PWerrormesage"></div>
                </div>
                <div className="check-passwordform">
                  <label className='label'>비밀번호 확인</label>
                  <div className="main">
                    <input name="password" type="password" className="checkPassword" required />
                    <i className="fa fa-eye fa-lg"></i>
                  </div>
                  <div className="PWerrormesage"></div>
                </div>
              </div>
              <button className="signup-button"> 회원가입 </button>
            </div>
          </div>
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
      <script src="js/sign.js"></script>
      <script src="js/signup_auth.js"></script>
    </div>
  );
}

export default Signup;
