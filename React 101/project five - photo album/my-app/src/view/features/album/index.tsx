import React from "react";
import { Link, Outlet } from "react-router-dom";


export function Album (){
    return (
        <div>This is the Album
            <Outlet/>
            <Link to="Album">
                <div className="link">Album</div>{" "}
            </Link> 
            <Link to="Photo">
                <div className="link">Photo</div>{" "}
            </Link>
  
        </div>
        
    )
}
