import FolderList from "./folderlist";
import SearchBar from "../SharedPage/searchbar";
import styles from './foldermain.module.css';
function FolderMain() {

    return(
        <div className={styles.folderMain}>
            <SearchBar/>
            <FolderList/>
        </div>
    )
}

export default FolderMain;