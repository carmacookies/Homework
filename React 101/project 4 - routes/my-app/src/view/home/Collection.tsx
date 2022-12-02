import {useEffect, useState} from 'react'
import { GetCollection } from './GetCollection';
import { Link, useParams } from "react-router-dom";
const [memeArray, setMemeArray] = useState([])
export interface Piece{
  box_count:number,
  height:number,
  id:string,
  name:string,
  url:string,
  width:number
}
 
function Collection() {
  
  return (
    <div className='collection'>
      <h3>These Are All The Pieces In Our Collection</h3>
      <GetCollection memeArray={memeArray} setMemeArray={setMemeArray}/>
    </div>
  )
}

export default  Collection;