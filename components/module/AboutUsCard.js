import styles from "./AboutUsCard.module.css";
function AboutUsCard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img className={styles.image} src="/images/favoritcar.png" />
        <span>01</span>
        <h3>Choose your favorit car</h3>
        <p>
          Find your new favorite car from over 30,000 new and used cars. All our
          vehicles are subject to strict quality standards and are carefully
          selected and inspected. Additionally, all our vehicles are backed by a
          free one-year warranty.
        </p>
      </div>

      <div className={styles.card}>
        <img src="https://carvago.com/images/how-it-works-2-2x.webp" />
        <span>02</span>
        <h3>Buy With Confidence</h3>
        <p>
          We build excitement about your new car right from the car selection
          stage. Our vehicle experts will advise you from the initial vehicle
          selection process to additional services like financing and insurance.
          We&apos;ll guide you every step of the way, so you can be sure
          you&apos;re buying the right car.
        </p>
      </div>

      <div className={styles.card}>
        <img src="https://carvago.com/images/how-it-works-3-2x.webp" />
        <span>03</span>
        <h3>Fall in Love With Your New Car</h3>
        <p>
          We&apos;ll let you pick up your new favorite car and deliver it to
          your home. After that, all you have to do is fall in love with it. You
          have 14 days to thoroughly test your new favorite in everyday life. If
          it&apos;s not your perfect match, simply return the vehicle.
        </p>
      </div>
    </div>
  );
}

export default AboutUsCard;
