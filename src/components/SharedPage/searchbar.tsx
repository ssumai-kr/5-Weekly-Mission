import styles from "./searchbar.module.css";
import searchIcon from '../../assets/Search.svg';
import { ChangeEvent } from 'react';

interface SearchBarProps {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleInput }) => {
  return (
    <form className={styles.searchBar}>
      <input
        className={styles.searchBar__input}
        type="search"
        placeholder="링크를 검색해 보세요."
        onChange={handleInput}
      />
      <img src={searchIcon} alt="검색창 돋보기 아이콘" className={styles.searchIcon}/>
    </form>
  );
}

export default SearchBar;
