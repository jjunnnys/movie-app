import React from 'react';
import { Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './components/Detail';

const App = () => {
  return (
    <>
      <Navigation />
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </>
  );
};

export default App;
