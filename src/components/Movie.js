import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MovieDiv = styled.div`
  width: 45%;
  background-color: white;
  margin-bottom: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

  img {
    position: relative;
    top: -50px;
    max-width: 150px;
    width: 100%;
    margin-right: 30px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  }

  .movie__title,
  .movie__year {
    margin: 0;
    font-weight: 300;
  }

  .movie__title {
    margin-bottom: 5px;
    font-size: 24px;
    color: #2c2c2c;
  }

  .movie__genres {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    margin: 5px 0px;
  }

  .movie__genres li,
  .movie__year {
    margin-right: 10px;
    font-size: 14px;
  }
`;

const Movie = ({ year, title, summary, poster, genres }) => {
  return (
    <MovieDiv>
      {/* 사진 위에 마우스를 올렸을 때 이름 뜨게 하기 -> title */}
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
      </div>
    </MovieDiv>
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
