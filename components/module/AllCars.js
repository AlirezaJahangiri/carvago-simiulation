import Link from "next/link";
import styles from "./AllCars.module.css";
function AllCars() {
  return (
    <div className={styles.container}>
      <Link href="/cars">
        <button>See All Cars</button>
      </Link>
    </div>
  );
}

export default AllCars;
