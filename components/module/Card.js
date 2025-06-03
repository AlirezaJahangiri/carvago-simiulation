import styles from "./Card.module.css";
import Location from "../icons/Location";
function Card(props) {
  const { id, name, model, year, distance, location, image, price } = props;

  return (
    <div className={styles.container}>
      <img src={image}></img>
      <h3>{`${name} ${model}`}</h3>
      <span>{`${year} | ${distance} km`}</span>
      <div className={styles.footer}>
        <span>$ {price}</span>
        <div className={styles.location}>
          <Location />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
