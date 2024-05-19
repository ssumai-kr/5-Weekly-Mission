import Icon from "../assets/icon.png";
import { Link } from "react-router-dom";
import Profile from "./profile";
import { useFetch } from "../usefetch";
import styles from './header.module.css';

function Header() {
  const profileData
   = useFetch("https://bootcamp-api.codeit.kr/api/sample/user");

  
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Link to="/">
          <img src={Icon} alt="Linkbrary 로고" className={styles.header__container__logo}/>
        </Link>
        {profileData ? (
          <Profile email={profileData.email} img={profileData.profileImageSource}/> 
        ) : <div>로그인</div>}
      </div>
    </div>
  );
}

export default Header;
