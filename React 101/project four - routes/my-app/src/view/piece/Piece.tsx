import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { goodData, Piece } from "../home/Collection"
//import { GetPiece} from "./GetPiece"


function PiecePage() {
  const [id, setId] = useState<string>("0")
  const { pieceId }: any = useParams();

  function GetPiece() {
    setId(pieceId)
  }
  console.log(pieceId)
  return (
    <div>
      <Link to="/">back</Link>
      <h1> This Piece</h1>

      <button onClick={GetPiece}>{id}</button>
      {/* <button onClick={()=>{setId(pieceId)}}>{id}</button> */}
    </div>
  );
}

export default PiecePage;