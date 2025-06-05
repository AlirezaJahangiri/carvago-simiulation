import styles from "./CarsDetail.module.css";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";
import Calender from "../icons/Calender";

function CarsDetail(props) {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    image,
    price,
    description,
  } = props;

  return (
    <div className={styles.container}>
      <img src={image} />
      <h3 className={styles.header}>{`${name} ${model}`}</h3>
      <div className={styles.details}>
        <div>
          <Company />
          <p>Company</p>
          <span>{name}</span>
        </div>
        <div>
          <Model />
          <p>Model</p>
          <span>{model}</span>
        </div>
        <div>
          <Calender />
          <p>First Registration</p>
          <span>{year}</span>
        </div>
        <div>
          <Road />
          <p>KMS Driven</p>
          <span>{distance}</span>
        </div>
      </div>
      <div className={styles.location}>
        <Location />
        <p>Location</p>
        <span>{location}</span>
      </div>
      <div className={styles.information}>
        <h3>Extra Information:</h3>
        <p>{description}</p>
      </div>
      <div className={styles.price}>
        <Money />
        <p>Price:</p>
        <span>{price}</span>
      </div>
      <button className={styles.buyBtn}>Buy</button>
    </div>
  );
}

export default CarsDetail;
