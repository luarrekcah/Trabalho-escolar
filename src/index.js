import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from './pages/App';
import Game from './pages/Game';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/jogo" element={<Game />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);