import Film from '../../features/film/Film';

const films = [
  {
    title: 'Властелин колец: Братство кольца',
    genre: 'Фэнтези',
    year: '2001',
    description: 'Сказания о Средиземье — это хроника Великой войны за Кольцо...',
    imageUrl: 'https://path-to-image.com/image1.jpg'
  },
  {
    title: 'Властелин колец: Две крепости',
    genre: 'Фэнтези',
    year: '2002',
    description: 'Продолжение приключений Фродо и его друзей...',
    imageUrl: 'https://path-to-image.com/image2.jpg'
  }
  // Добавьте больше фильмов, если нужно
];

function Films() {
  return (
    <div>
      {films.map((film, index) => (
        <Film
          key={index}
          title={film.title}
          genre={film.genre}
          year={film.year}
          description={film.description}
          imageUrl={film.imageUrl}
        />
      ))}
    </div>
  );
}

export default Films;
