import axios from 'axios';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import GuestPage from './features/GuestPage';
import RecipePage from './features/RecipePage';
import WelcomePage from './features/WelcomePage';


function App() {
  return (
   <div>
     <BrowserRouter>
      <Routes> 
        <Route index element={<WelcomePage />}/>
        <Route path='RecipePage' element= {<RecipePage/>}/>
        
        <Route path='GuestPage' element= {<GuestPage/>}/>
      </Routes>
      </BrowserRouter>
    
   </div>
  );
}

export default App;
