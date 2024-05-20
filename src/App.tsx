import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './components/footer';
import Icon from './assets/icon.png';
import Landing1 from './assets/landing1.png';
import Landing2 from './assets/landing2.png';
import Landing3 from './assets/landing_3.png';
import Landing4 from './assets/landing4.svg';
import Landing5 from './assets/landing5.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App__body">
      <header className="header-basic">
        <div className="header-container">
          <a href="/">
            <img
              src={Icon}
              alt="Linkbrary 로고"
              className="header-logo"
            />
          </a>
          <Link to="/signin" className="header-link_to_signin">
            <p>로그인</p>
          </Link>
        </div>
      </header>
      <main>
        <section className="main__first-section">
          <h1 className="section-text-1">
            <span className="hilight1">세상의 모든 정보</span>를 <br />
            쉽게 저장하고 관리해 보세요
          </h1>
          <h1 className="section-text-1-tablet">
            <span className="hilight1">세상의 모든 정보</span>를 <br />
            쉽게 저장하고
            <br />
            관리해 보세요
          </h1>
          <a href="signin.html" className="main-pluslink">
            <p>링크 추가하기</p>
          </a>
          <div className="main-img_container">
            <img
              src={Landing1}
              alt="메인 소개 이미지"
              className="first_section_img"
            />
          </div>
        </section>
        <section className="main__second-section">
          <div className="section-text">
            <h1 className="section-text-2">
              <span className="hilight2">원하는 링크</span>를 <br />
              저장하세요
            </h1>
            <p>
              나중에 읽고싶은 글, 다시보고싶은 영상, <br />
              사고싶은 옷, 기억하고싶은 모든 것을
              <br />한 공간에 저장하세요.
            </p>
          </div>
          <img
            src={Landing2}
            alt="링크 저장 소개 이미지"
            className="second_section_img"
          />
        </section>
        <section className="main__second-section--mobile">
          <div className="main__second-section--mobile-container">
            <h1>
              <span className="hilight2">원하는 링크</span>를 저장하세요
            </h1>
            <img
              src={Landing2}
              alt="링크 저장 소개 이미지"
              className="second_section_img_mobile"
            />
            <p>
              나중에 읽고싶은 글, 다시 보고싶은 영상, 사고 싶은 옷,
              <br />
              기억하고 싶은 모든 것을 한 공간에 저장하세요.
            </p>
          </div>
        </section>
        <section className="main__third-section">
          <img
            src={Landing3}
            alt="링크 관리 소개 이미지"
            className="third_section_img"
          />
          <div className="section-text">
            <h1 className="section-text-3">
              링크를 폴더로
              <br />
              <span className="hilight3">관리</span>하세요
            </h1>
            <p>
              나만의 폴더를 무제한으로 만들고
              <br />
              다양하게 활용할 수 있습니다.
            </p>
          </div>
        </section>
        <section className="main__third-section--mobile">
          <div className="main__third-section--mobile_container">
            <h1>
              링크를 폴더로<span className="hilight3"> 관리</span>하세요
            </h1>
            <img
              src={Landing3}
              alt="링크 관리 소개 이미지"
              className="third_section_img_mobile"
            />
            <p>
              나만의 폴더를 무제한으로 만들고 다양하게 활용할 수<br />
              있습니다.
            </p>
          </div>
        </section>
        <section className="main__fourth-section">
          <div className="section-text">
            <h1 className="section-text-4">
              저장한 링크를
              <br />
              <span className="hilight4">공유</span>해 보세요.
            </h1>
            <p className="section-text-4-basic">
              여러 링크를 폴더에 담고 공유할 수 있습니다.
              <br />
              가족, 친구, 동료들에게 쉽고 빠르게 링크를
              <br />
              공유해보세요.
            </p>
            <p className="section-text-4-tablet">
              여러 링크를 폴더에 담고 공유할 수 <br />
              있습니다. 가족, 친구, 동료들에게 쉽고
              <br />
              빠르게 링크를 공유해보세요.
            </p>
          </div>
          <img
            src={Landing4}
            alt="링크 공유 소개 이미지"
            className="fourth_section_img"
          />
        </section>
        <section className="main__fourth-section--mobile">
          <div className="main__fourth-section--mobile_container">
            <h1>
              저장한 링크를<span className="hilight4"> 공유</span>해 보세요
            </h1>
            <img
              src={Landing4}
              alt="링크 공유 소개 이미지"
              className="fourth_section_img_mobile"
            />
            <p>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족,
              <br />
              친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.
            </p>
          </div>
        </section>
        <section className="main__fifth-section">
          <img
            src={Landing5}
            alt="링크 검색 소개 이미지"
            className="fifth_section_img"
          />
          <div className="section-text">
            <h1 className="section-text-5">
              저장한 링크를
              <br />
              <span className="hilight5"> 검색</span>해 보세요
            </h1>
            <p className="section-text-5-basic">
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </p>
            <p className="section-text-5-tablet">
              중요한 정보들을 검색으로 쉽게
              <br />
              찾아보세요.
            </p>
          </div>
        </section>
        <section className="main__fifth-section--mobile">
          <div className="main__fifth-section--mobile_container">
            <h1>
              저장한 링크를<span className="hilight5"> 검색</span>해 보세요
            </h1>
            <img
              src={Landing5}
              alt="링크 검색 소개 이미지"
              className="fifth_section_img_mobile"
            />
            <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
