import styles from "./Rating.module.css";

type RatingProps = {
  id: string | number;
}

function Rating({ id }: RatingProps) {
  return (
    <fieldset className={styles.rating}>
      <input type="radio" id={`star5-${id}`} name={`rating-${id}`} value="5" />
      <label className={styles.full} htmlFor={`star5-${id}`} title="Awesome - 5 stars"></label>
      <input type="radio" id={`star4-${id}`} name={`rating-${id}`} value="4" />
      <label className={styles.full} htmlFor={`star4-${id}`} title="Pretty good - 4 stars"></label>
      <input type="radio" id={`star3-${id}`} name={`rating-${id}`} value="3" />
      <label className={styles.full} htmlFor={`star3-${id}`} title="Meh - 3 stars"></label>
      <input type="radio" id={`star2-${id}`} name={`rating-${id}`} value="2" />
      <label className={styles.full} htmlFor={`star2-${id}`} title="Kinda bad - 2 stars"></label>
      <input type="radio" id={`star1-${id}`} name={`rating-${id}`} value="1" />
      <label className={styles.full} htmlFor={`star1-${id}`} title="Sucks big time - 1 star"></label>
    </fieldset>
  );
}

export default Rating;
