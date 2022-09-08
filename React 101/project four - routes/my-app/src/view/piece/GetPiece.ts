import { useParams } from "react-router-dom";


export const GetPiece = () => {
    const {pieceId }= useParams();
    console.log(pieceId)
    //const thisPiece = goodData.find((piece) => piece.id == pieceId) 
}