import React from 'react';
import Game from "./view/features/game"
import Login from "./view/features/login"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './view/others/app.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={< Login />} />
        <Route path="game" element={< Game/>} />
      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
