import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";
import styles from "./Categories.module.css";

function Categories() {
  return (
    <div className={styles.container}>
      <div>
        <span>Sedan</span>
        <Sedan />
      </div>
      <div>
        <span>SUV</span>
        <Suv />
      </div>
      <div>
        <span>Hatchback</span>
        <Hatchback />
      </div>
      <div>
        <span>Sport</span>
        <Sport />
      </div>
    </div>
  );
}

export default Categories;
