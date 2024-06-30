import classNames from "classnames";
import { useEffect, useState, Fragment } from "react";
import styles from "./Rating.module.css";
import { starTitles } from "../../constants/starTitles";

type RatingProps = {
  id: string | number;
  className?: string;
};

function Rating({ id, className }: RatingProps) {
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${id}`);
    if (savedRating) {
      setRating(parseInt(savedRating, 10));
    }
  }, [id]);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    localStorage.setItem(`rating-${id}`, newRating.toString());
  };

  return (
    <fieldset className={classNames(styles.rating, className)}>
      {starTitles.map((star) => (
        <Fragment key={star.value}>
          <input
            type="radio"
            id={`star${star.value}-${id}`}
            name={`rating-${id}`}
            value={star.value}
            checked={rating === star.value}
            onChange={() => handleRatingChange(star.value)}
          />
          <label
            className={styles.full}
            htmlFor={`star${star.value}-${id}`}
            title={star.title}
          ><span className={styles.count}>{star.value}</span></label>
        </Fragment>
      ))}
    </fieldset>
  );
}

export default Rating;
