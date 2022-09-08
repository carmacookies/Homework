import React from 'react';
import './view/appComponents/app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too

import Home from "./view/home/Home"
import Collection from "./view/home/Collection"
import Cart from "./view/cart/Cart"
import NewProduct from "./view/newPiece/newProduct/NewProduct"
import Piece from "./view/piece/Piece"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* OUTLET */}

          <Route index element={<Collection />} />
          <Route path='cart' element={<Cart />} />
          <Route path='newProduct' element={<NewProduct />} />
        </Route>
        
        <Route path= 'piece/:pieceId' element= {<Piece/>}></Route>
      </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
