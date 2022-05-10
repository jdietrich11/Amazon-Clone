import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../header/header';
import Home from '../../pages/home/home';
import AuthPage from '../../pages/auth/auth';
import ProductPage from '../../pages/product/product';

import './app.scss';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/auth' element={<AuthPage />} />
          <Route exact path='/product/:id' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
