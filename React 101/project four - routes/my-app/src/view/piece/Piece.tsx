import { Link} from "react-router-dom";
import { goodData, Piece } from "../home/Collection"
import { GetPiece} from "./GetPiece"


function piece() {
    
    return (
      <div>
            <Link to="/">back</Link>
          <h1> This Piece</h1>
            <button onClick={GetPiece}>dfsdf</button>
      </div>
    );
  }
  
  export default piece;