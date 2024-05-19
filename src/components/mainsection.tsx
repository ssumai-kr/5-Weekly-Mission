import SearchBar from "./searchbar";
import CardList from "./cardlist";
import styles from './mainsection.module.css';
function MainSection() {
  return (
    <div className={styles.mainSection}>
      <SearchBar />
      <CardList url ="https://bootcamp-api.codeit.kr/api/sample/folder"/>
    </div>
  );
}

export default MainSection;
