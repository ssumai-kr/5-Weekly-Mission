import FolderPlusLink from "../components/FolderPage/folderpluslink";
import Header from "../components/header";
import Footer from "../components/footer";
import FolderMain from "../components/FolderPage/foldermain";
import styles from './folder.module.css';

function Folder() {
  return (
    <div>
      <Header />
      <FolderPlusLink />
      <div className={styles.FolderMain}>
        <FolderMain />
        <Footer />
      </div>
    </div>
  );
}

export default Folder;
