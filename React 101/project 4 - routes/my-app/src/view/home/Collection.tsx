import {useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
export interface Piece{
  id:string,
  name:string,
  url:string
}
export const goodData:Piece[] = [
  {id:"181913649",name:"Drake Hotline Bling",url:"https:\/\/i.imgflip.com\/30b1gx.jpg"},
  {id:"87743020",name:"Two Buttons",url:"https:\/\/i.imgflip.com\/1g8my4.jpg"},
  {id:"112126428",name:"Distracted Boyfriend",url:"https:\/\/i.imgflip.com\/1ur9b0.jpg"},
  {id:"131087935",name:"Running Away Balloon",url:"https:\/\/i.imgflip.com\/261o3j.jpg"},
  {id:"217743513",name:"UNO Draw 25 Cards",url:"https:\/\/i.imgflip.com\/3lmzyx.jpg"},
  {id:"129242436",name:"Change My Mind",url:"https:\/\/i.imgflip.com\/24y43o.jpg"},
  {id:"124822590",name:"Left Exit 12 Off Ramp",url:"https:\/\/i.imgflip.com\/22bdq6.jpg"},
  {id:"247375501",name:"Buff Doge vs. Cheems",url:"https:\/\/i.imgflip.com\/43a45p.png"},
  {id:"222403160",name:"Bernie I Am Once Again Asking For Your Support",url:"https:\/\/i.imgflip.com\/3oevdk.jpg"}
]
 
function Collection() {
  
  return (
    <div>
      <h3>These Are All The Pieces In Our Collection</h3>
      
      {goodData.map((piece:Piece) =>{
        return <Link to= {`piece/${piece.id}`} key={piece.id}>{piece.name}  </Link>
      })}
    </div>
  )
}

export default  Collection;