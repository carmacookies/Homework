import { Outlet } from "react-router-dom";

//components
import { Nav } from "../appComponents/Nav";

function Main() {
  return (
    <div>
    
      <Outlet/>
      <Nav />
    </div>
  );
}

export default Main;