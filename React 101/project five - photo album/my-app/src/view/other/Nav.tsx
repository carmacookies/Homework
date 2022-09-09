import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav">

      <Link to="Album">
        <div className="link">Album</div>{" "}
      </Link>

      <Link to="Photo">
        <div className="link">Photo</div>{" "}
      </Link>

      
    </div>
  );
};