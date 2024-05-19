import styles from "./footer.module.css";
import FacebookImg from "../assets/facebook.svg";
import InstagramImg from "../assets/instagram.svg";
import TwitterImg from "../assets/twitter.svg";
import YoutubeImg from "../assets/youtube.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__rights}>
          <p>©codeit - 2024</p>
        </div>
        <div className={styles.footer__links}>
          <Link to="privacy.html" className={styles.link_to_privacy}>
            Privacy Policy
          </Link>
          <Link to="faq.html" className={styles.link_to_faq}>
            FAQ
          </Link>
        </div>
        <div className={styles.footer_sns_link}>
          <Link target="_blank" to="https://www.facebook.com/">
            <img src={FacebookImg} alt="페이스북 연결 페이지" />
          </Link>
          <Link to="https://www.twitter.com">
            <img src={TwitterImg} alt="트위터(X) 연결페이지" />
          </Link>
          <Link to="https://www.youtube.com">
            <img src={YoutubeImg} alt="유튜브 연결 페이지" />
          </Link>
          <Link to="https://www.instagram.com">
            <img src={InstagramImg} alt="인스타그램 연결 페이지" />
          </Link>
        </div>
      </div>
      <div className={styles.footer__rights__mobile}>
        <p>©codeit - 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
