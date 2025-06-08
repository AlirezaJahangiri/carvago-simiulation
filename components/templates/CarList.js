import Card from "../module/Card";
import styles from "./CarList.module.css";
import { useRouter } from "next/router";

function CarList({ data }) {
  const router = useRouter();
  const backHandler = () => {
    router.back();
  };
  const path = router.pathname;
  const categoryName = path.replace("/categories/", "");
  return (
    <div className={styles.container}>
      <div className={styles.backBtn} onClick={backHandler}>
        <span>{`< Back`}</span>
      </div>
      <div className={styles.categoryName}>
        <h2>{categoryName}</h2>
      </div>
      <div className={styles.cardContainer}>
        {data.map((car) => {
          return <Card key={car.id} {...car} />;
        })}
      </div>
    </div>
  );
}

export default CarList;
