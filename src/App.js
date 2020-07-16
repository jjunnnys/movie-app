import React, { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log('로딩 중...');
    }, 3000);
    setIsLoading(true);
  }, []);
  return (
    <>
      <h1>{isLoading ? 'Loading...' : 'Complate!!'}</h1>
    </>
  );
};

export default App;
