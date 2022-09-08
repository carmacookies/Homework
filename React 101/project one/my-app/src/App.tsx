import React from 'react';
import logo from './logo.svg';
import './view/style/app.scss';
import Card from './view/cards/Card'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find Cool Photos!
        </a>
        <Card title='Cat' subtitle='cats are better then everyone else' img='https://i.pinimg.com/236x/3c/78/24/3c782428476b3ed6b149f99cb3e36174.jpg'/>
        <button> Show Us Your Photos! </button>
      </header>
    </div>
  );
}

export default App;
