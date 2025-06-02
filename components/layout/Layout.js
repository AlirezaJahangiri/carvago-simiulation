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
      <footer className={styles.footer}>
        <div className={styles.socials}>
          <Image src="/images/carvago-text.svg" width="100" height="70"></Image>
          <p>Carvago 2025 * All Rights Reserved &copy;</p>
          <div className={styles.socialLinks}>
            <Image src="/images/youtube.svg" width="25" height="25"></Image>
            <Image src="/images/linkedin.svg" width="25" height="25"></Image>
            <Image src="/images/facebook.svg" width="25" height="25"></Image>
            <Image src="/images/telegram.svg" width="25" height="25"></Image>
          </div>
        </div>
        <div className={styles.helpfulTags}>
          <div className={styles.carvago}>
            <h3>Carvago</h3>
            <p>Buy</p>
            <p>Reviews</p>
            <p>How does it work?</p>
            <p>Available</p>
            <p>Hybrid</p>
          </div>
          <div className={styles.services}>
            <h3>Services</h3>
            <p>CarAudit</p>
            <p>Delivery</p>
            <p>Financing</p>
            <p>gurantee</p>
          </div>
        </div>
      </footer>
      <div className={styles.creator}>Made with ❤️ by Alireza Jahangiri</div>
    </>
  );
}

export default Layout;
