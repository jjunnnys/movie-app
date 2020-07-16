import React, { useEffect } from 'react';

const Detail = ({ location, history }) => {
  useEffect(() => {
    if (!location.title) {
      history.push('/');
    }
  }, [history, location]);

  return <>{location.title}</>;
};

export default Detail;
