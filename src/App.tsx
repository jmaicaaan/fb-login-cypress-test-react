import React from 'react';

import {
  Route,
  Routes,
} from 'react-router';

import { Home } from './containers/Home';
import { Login } from './containers/Login';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </div>
);

export default App;
