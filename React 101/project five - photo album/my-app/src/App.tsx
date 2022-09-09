import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './view/other/app.scss';
import {Album} from "./view/features/Album"
import {Photo} from "./view/features/Photo"
import {Main} from "./view/features/main"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Main/>}>
            <Route path="Album" element={<Album />}/>
            <Route path="Photo" element={<Photo />}/>
            </Route>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
     
  );
}

export default App;
