import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../header/header';
import Home from '../../pages/home/home';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
