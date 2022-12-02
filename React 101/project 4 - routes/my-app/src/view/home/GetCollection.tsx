import { Link } from "react-router-dom"
import { Piece } from "./Collection"
import axios from "axios"
import { useState, useEffect } from "react"
import { PieceCard } from "../appComponents/PieceCard"

interface GetCollectionProps{
  memeArray:Array<Piece>
  setMemeArray:Function
}
export const GetCollection = ({memeArray, setMemeArray}:GetCollectionProps) => {
    
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((data) => {
        setMemeArray(data.data.data.memes);
        //console.log(memeArray)
      })
      .catch((err) => console.error(err));
      return(
          <div>
          {memeArray.map((piece:Piece) =>{
            return <PieceCard key={piece.id} piece={piece}/>
          })}
          </div>
        )
      }