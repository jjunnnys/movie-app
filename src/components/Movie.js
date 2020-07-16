import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ id, year, title, summary, poster, genres }) => {
  return (
    <div className="movie">
      {/* 사진 위에 마우스를 올렸을 때 이름 뜨게 하기 -> title */}
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
      </div>
      <p className="movie__summary">{summary}</p>
    </div>
  );
};

Movie.prototype = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summery: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
