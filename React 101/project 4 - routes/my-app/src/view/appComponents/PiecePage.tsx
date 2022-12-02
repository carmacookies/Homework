import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Piece } from "../home/Collection"

interface PiecePageProps{
    piece:Piece
}
export const PiecePage = () => {
  const [id, setId] = useState<string>("0")
  const { pieceId }: any = useParams();

  function GetPiece() {
    setId(pieceId)
  }
  console.log(pieceId)
  return (
    <div className="piecePage">
        <Link to="/">back</Link>
        <h1> This Piece</h1>
        {/* <img src={piece.url} alt="" /> */}
        {/* <button onClick={GetPiece}>{id}</button> */}
        {/* <button onClick={()=>{setId(pieceId)}}>{id}</button> */}
    </div>
  );
}
