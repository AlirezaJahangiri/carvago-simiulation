import Link from "next/link";
import styles from "./Nothing.module.css";
function Nothing() {
  return (
    <div className={styles.container}>
      <h2>No Cars Available</h2>
      <p>Please modify your search or try again later.</p>
      <Link href="/">
        <button className={styles.backBtn}>{`< Back`}</button>
      </Link>
    </div>
  );
}

export default Nothing;
