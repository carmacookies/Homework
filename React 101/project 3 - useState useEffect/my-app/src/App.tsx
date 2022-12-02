import React from 'react';
import './view/style/app.scss';
import axios from 'axios';
import {useState, useEffect} from "react"

function App() {
  const [color, setColor] = useState('')
  function getRandomColor(){
    const newColor = Math.floor(Math.random()*16777215).toString(16)
    console.log(newColor)
    let newBackgroundColor:string = `#${newColor}`
    setColor(newBackgroundColor)
  }
  
  const [catFact, setCatFact] = useState('')
  async function handleGetCatFact(){
    //@ts-ignore
      const { data } = await axios.get('https://catfact.ninja/fact')
      const {fact} = data
      if(!fact) throw new Error('no facts')
      console.log(fact)
      setCatFact(fact)
    }
  
  
  useEffect(()=>{
    handleGetCatFact()
  },[color])
  return (
    <div className="App" >
      <header className="App-header" style={{
      backgroundColor: color
    }}>
      <button onClick={handleGetCatFact}>get a cat fact</button>
      <div>
        {catFact}
      </div>
      <button onClick={getRandomColor}>change color</button>

     
      </header>
    </div>

  );
}

export default App;