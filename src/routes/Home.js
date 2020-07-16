import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Movie from '../components/Movie';

const Home = () => {
  const [state, setState] = useState({
    isLoading: true,
    movies: [],
  });

  const { isLoading, movies } = state;

  useEffect(() => {
    async function getMoives() {
      // data.data.movies 랑 같다
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
      );
      setState({ movies, isLoading: false });
    }
    getMoives();
  }, []);

  return (
    <>
      <main className="container">
        {isLoading ? (
          <div className="loader">
            <h1 className="loader__text">Loading...</h1>
          </div>
        ) : (
          <section className="movies">
            {movies.map(
              ({ id, year, title, summary, medium_cover_image, genres }) => (
                <Link
                  to={{
                    pathname: `/movie/${id}`,
                    year,
                    title,
                    summary,
                    medium_cover_image,
                    genres,
                  }}
                >
                  <Movie
                    key={id}
                    year={year}
                    title={title}
                    summary={summary}
                    poster={medium_cover_image}
                    genres={genres}
                  />
                </Link>
              ),
            )}
          </section>
        )}
      </main>
    </>
  );
};

export default Home;
