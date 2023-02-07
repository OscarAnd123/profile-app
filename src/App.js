import React from 'react';
import {Routes ,Route, } from "react-router-dom";
import './App.css';

import Home from './components/view/Home';
import Portfolio from './components/view/Portfolio';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Portfolio" element={<Portfolio />} />
      </Routes>
      
    </div>
  );
}

export default App;
