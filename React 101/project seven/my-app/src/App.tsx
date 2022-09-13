import React from 'react';
import { Form } from "./view/features/form/form"
import { FormDisplay } from './view/features/formdisplay/formdisplay';
import './App.css';
import { useState } from "react"

function App() {
  
const [text, setText] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <Form setText={setText}/>
        <FormDisplay text={text}/>
      </header>
    </div>
  );
}

export default App;
