import AboutUsCard from "../module/AboutUsCard";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>How does instamotion work?</h2>
      </div>
      <div>
        <AboutUsCard />
      </div>
    </div>
  );
}

export default AboutUs;
