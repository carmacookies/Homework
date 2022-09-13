import React from "react";
import {Link } from "react-router-dom"
import { useState } from "react";
import SecretCard from "../../others/SecretCard";
import { Secret, ListOfSecrets } from "../../others/SecretCard";
import { stat } from "fs";


const Game = () => {
    const [cardView, setCardView] = useState("rapper")
    const [secretView, setSecretView] = useState('none')
    const [randomFact, setRandomFact] = useState(0)
    const [stateOne, setStateOne] = useState(true)
    const [stateTwo, setStateTwo] = useState(false)
    const [playerAnswer, setPlayerAnswer] = useState('')
    const [displayResult, setDisplayResult] = useState({"display" : "none"})
    function handleClick(ev:any){
        setCardView("none")
        setSecretView("rapper")
        setRandomFact(Math.floor((Math.random() * 7) + 1))
        let num = Math.floor(Math.random() * (2)+1)
        if(num === 1){
            setStateOne(true)
            setStateTwo(false)
        }
        if(num === 2){
            setStateOne(false)
            setStateTwo(true)
        }
        console.log(num, randomFact)
    }
    function handleChoice(ev:any){
        setPlayerAnswer(ev.target.children[0].innerText)
        setDisplayResult({"display" : "inline"})
    }
    return (
        <div>
            <Link to="/" className="linkBack">Back</Link>
            <h2> Welcome to the Game</h2>
            <div className={cardView}>
                <h4>Choose a Card Then Guess Which Fact About Me is True</h4>
                <div className="card" onClick={handleClick}>One</div>
                <div className="card" onClick={handleClick}>Two</div>
                <div className="card" onClick={handleClick}>Three</div>
                <div className="card" onClick={handleClick}>Four</div>
            </div>
            <div className={secretView}>
                <div onClick={handleChoice}>
                    <SecretCard secret={ListOfSecrets[randomFact]} state={stateOne}/>
                </div>
                <div onClick={handleChoice}>
                    <SecretCard secret={ListOfSecrets[randomFact]} state={stateTwo}/>
                </div>
            </div>
            <div className="result" style={displayResult}>
                your answer is {playerAnswer}
            </div>
        </div>
    );
}

export default Game;