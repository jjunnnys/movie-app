import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ year, title, summery, poster }) => {
  return (
    <>
      <h1>{year}</h1>
      <img src={poster} alt={title} />
    </>
  );
};

Movie.prototype = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summery: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
