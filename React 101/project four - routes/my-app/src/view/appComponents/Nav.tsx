import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav">

      <Link to="/">
        <div className="link">Home</div>{" "}
      </Link>

      <Link to="/cart">
        <div className="link">Cart</div>{" "}
      </Link>

      <Link to="/newProduct">
        <div className="link">Create New Product</div>
      </Link>
      
    </div>
  );
};