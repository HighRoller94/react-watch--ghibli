import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// STYLES 

import './styles/styles.scss';

// PAGES

import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {

  return (
    <>
    <Router>
      <div className="app">
        <Routes>
          <Route path=":name" element={<Movie />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
