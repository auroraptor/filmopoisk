import React from 'react';
import { Actor } from '../../shared/types';
import styles from './ActorsSlider.module.css';

interface ActorsSliderProps {
  actors: Actor[];
}

const ActorsSlider: React.FC<ActorsSliderProps> = ({ actors }) => {
  return (
    <div className={styles.actorsSlider}>
      <h2>Актёры</h2>
      <div className={styles.actors}>
        {actors.map((actor) => (
          <div key={actor.name} className={styles.actor}>
            <img src={actor.photo} alt={actor.name} className={styles.actorPhoto} />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorsSlider;
