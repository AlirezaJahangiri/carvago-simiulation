import styles from "./ShowCategoryName.module.css";
import { useRouter } from "next/router";
function ShowCategoryName() {
  const router = useRouter();
  const path = router.pathname;
  const categoryName = path.replace("/categories/", "");
  return (
    <div className={styles.container}>
      <h2>{categoryName}</h2>
    </div>
  );
}

export default ShowCategoryName;
