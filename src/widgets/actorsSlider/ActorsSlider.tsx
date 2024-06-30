import React from 'react';
import { Actor } from '../../shared/types';
import styles from './ActorsSlider.module.css';

interface ActorsSliderProps {
  actors: Actor[];
}

const ActorsSlider: React.FC<ActorsSliderProps> = ({ actors }) => {
  return (
    <section className={styles.actorsSlider}>
      <h2 className={styles.actorsTitle}>Актёры</h2>
      <div className={styles.actors}>
        {actors.map((actor) => (
          <div key={actor.name} className={styles.actor}>
            <img src={actor.photo} alt={actor.name} className={styles.actorPhoto} />
            <p className={styles.actorName}>{actor.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActorsSlider;
