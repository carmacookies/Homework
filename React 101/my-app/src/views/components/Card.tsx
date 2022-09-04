import React from "react";

interface CardProps{
    name: string
    quote: string
    imgUrl: string
}


const Card = ({name, quote, imgUrl}:CardProps) => {
    
   return(
    <div className="card">
        <h2>{name}</h2>
        <h3>{quote}</h3>

        <img src={imgUrl} alt="" ></img>
    </div>
   )
}

export default Card;