import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './components/Movie';

const App = () => {
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
      <div>
        {isLoading
          ? `Loading...`
          : movies.map(({ id, year, title, summery, medium_cover_image }) => (
              <Movie
                key={id}
                year={year}
                title={title}
                summery={summery}
                poster={medium_cover_image}
              />
            ))}
      </div>
    </>
  );
};

export default App;
