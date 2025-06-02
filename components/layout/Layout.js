import Link from "next/link";
import styles from "./Layout.module.css";
import Image from "next/image";

function Layout({ children }) {
  return (
    <>
      {/* HEADER */}
      <header className={styles.header}>
        <div>
          <Image src="/images/carvago-text.svg" width="100" height="70"></Image>
        </div>
        <div className={styles.slogan}>
          <p>Buy A Vehicle Without Risk</p>
        </div>
        <div className={styles.aboutUsBtn}>
          <Link href="/about-us">About Us</Link>
        </div>
      </header>

      <div className={styles.container}>{children}</div>

      {/* FOOTER */}
      <footer>khodafex</footer>
    </>
  );
}

export default Layout;
