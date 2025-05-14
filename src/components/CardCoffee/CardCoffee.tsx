import styles from "./CardCoffee.module.css";
import IconStarFill from "../../assets/icons/Star_fill.svg";
import IconStar from "../../assets/icons/Star.svg";
import type { Coffee } from "../../type";

interface Props {
  coffee: Coffee;
}

function CardCoffee({ coffee }: Props) {
  const { image, name, price, rating, votes, available, popular } = coffee;
  return (
    <div className={styles.card}>
      {popular && <span className={styles.popular}>Popular</span>}
      <img className={styles.img} src={image} alt={`Image of ${name}`} />
      <h3 className={styles.title}>
        {name}
        <span className={styles.price}>{price && price}</span>
      </h3>
      <div className={styles.footer}>
        <p className={styles.rating}>
          {rating ? (
            <img
              src={IconStarFill}
              alt="icon star"
              className={styles.iconStar}
            />
          ) : (
            <img src={IconStar} alt="icon star" className={styles.iconStar} />
          )}
          {rating ? rating : "No rating"}{" "}
          <span className={styles.votes}>{`(${votes} votes)`}</span>
        </p>
        <span className={styles.available}>{!available && "Sould out"}</span>
      </div>
    </div>
  );
}
export default CardCoffee;
