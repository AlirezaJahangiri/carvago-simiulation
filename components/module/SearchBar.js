import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
function SearchBar() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const router = useRouter();
  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      toast.warning("Please Enter Min And Max");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.searchBarContainer}>
        <input
          type="number"
          placeholder="Min Price"
          className={styles.priceInput}
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />

        <span className={styles.seperator}>—</span>

        <input
          type="number"
          placeholder="Max Price"
          className={styles.priceInput}
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>

      <button className={styles.searchBtn} onClick={searchHandler}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
