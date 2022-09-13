import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './app.scss'
 
import { AdminPage } from './features/admin/adminPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AdminPage />}>
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
