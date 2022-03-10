import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Show from './pages/Show';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/show/:id" element={<Show />} />
        <Route path="*" element={<div>This is 404 page</div>} />
      </Routes>
    </div>
  );
}

export default App;
