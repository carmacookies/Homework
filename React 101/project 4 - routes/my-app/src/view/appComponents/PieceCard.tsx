import { Piece } from "../home/Collection"
import { Link } from "react-router-dom"
interface PieceCardProps{
    piece:Piece
}
export const PieceCard = ({piece}: PieceCardProps) =>{
    return(
        <div className="pieceCard">
            <Link to= {`piece/${piece.id}`} key={piece.id}> 
                <h3>{piece.name}</h3>
                <img src={piece.url} alt="" />
            </Link>
        </div>
    )
    
}