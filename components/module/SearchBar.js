import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
function SearchBar() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const router = useRouter();
  const searchHandler = () => {
    // if (!min && max) {
    //   toast.warning("Please Enter Min And Max");
    // } else if (min < 9000 && max > 70000) {
    //   toast.warning("please enter number between 9000 to 70000");
    // } else {
    //   router.push(`/filter/${min}/${max}`);
    // }
    // }
    if (!min || !max) {
      toast.warning("Please enter both Min and Max values");
    } else if (min < 9000 || max > 70000) {
      toast.warning("Please enter values between 9000$ and 70000$");
    } else if (min >= max) {
      toast.warning("Min value must be less than Max value");
    } else {
      router.push(`/filter/${min}/${max}`);
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
