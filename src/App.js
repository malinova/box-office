import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element="test" />
      <Route path="/starred" element="test2" />
      <Route path="*" element="This is 404 page" />
    </Routes>
  );
}

export default App;
