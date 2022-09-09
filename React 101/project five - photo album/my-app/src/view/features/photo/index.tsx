import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Photo (){
    return (
        <div>This is the 
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
