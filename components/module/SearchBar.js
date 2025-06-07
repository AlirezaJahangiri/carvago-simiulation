import styles from "./SearchBar.module.css";
function SearchBar() {
  return (
    <div className={styles.container}>
      <div className={styles.searchBarContainer}>
        <input
          type="number"
          placeholder="Min Price"
          className={styles.priceInput}
        />

        <span className={styles.seperator}>—</span>

        <input
          type="number"
          placeholder="Max Price"
          className={styles.priceInput}
        />
      </div>

      <button className={styles.searchBtn}>Search</button>
    </div>
  );
}

export default SearchBar;
