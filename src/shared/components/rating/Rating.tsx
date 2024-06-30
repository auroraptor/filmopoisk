import classNames from "classnames";
import { useEffect, useState, Fragment } from "react";
import styles from "./Rating.module.css";
import { starTitles } from "../../constants/starTitles";
import { useRateMovieMutation } from "../../../store/services/films";

type RatingProps = {
  id: string | number;
  className?: string;
};

function Rating({ id, className }: RatingProps) {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [rateMovie] = useRateMovieMutation();

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${id}`);
    if (savedRating) {
      setSelectedRating(parseInt(savedRating, 10));
    }
  }, [id]);

  const handleRatingChange = (value: number) => {
    setSelectedRating(value);
    localStorage.setItem(`rating-${id}`, value.toString());
    rateMovie({ movieId: String(id), user_rate: value })
      .unwrap()
      .then((response) => {
        // Обработка успешного ответа
        console.log('Rating updated successfully:', response);
      })
      .catch((error) => {
        // Обработка ошибок
        console.error('Failed to update rating:', error);
      });
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
            checked={selectedRating === star.value}
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
