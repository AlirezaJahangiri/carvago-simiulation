import styles from "./ShowPrice.module.css";
import { useRouter } from "next/router";
function ShowPrice() {
  const router = useRouter();
  const path = router.asPath;
  const parts = path.split("/");
  const min = parts[2];
  const max = parts[3];

  return (
    <div className={styles.container}>
      <h2>{`${min}$ - ${max}$`}</h2>
    </div>
  );
}

export default ShowPrice;
