import classNames from "classnames";
import { useEffect, useState, Fragment } from "react";
import { useSelector } from 'react-redux';
import styles from "./Rating.module.css";
import { RootState } from "@/store";
import { useRateMovieMutation } from "@/store/services/films";
import { starTitles } from "@/shared/constants/starTitles";

type RatingProps = {
  id: string | number;
  className?: string;
};

function Rating({ id, className }: RatingProps) {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const [rateMovie] = useRateMovieMutation();

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${id}`);
    if (savedRating) {
      setSelectedRating(Number(savedRating));
    }
  }, [id]);

  const handleRatingChange = (value: number) => {
    if (!isAuth) {
      alert('Вы должны быть авторизованы для оценки фильма');
      return;
    }
    setSelectedRating(value);
    localStorage.setItem(`rating-${id}`, value.toString());
    rateMovie({ movieId: String(id), user_rate: value })
      .unwrap()
      .then((response) => {
        console.log('Rating updated successfully:', response);
      })
      .catch((error) => {
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
            disabled={!isAuth}
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
