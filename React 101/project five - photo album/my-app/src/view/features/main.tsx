import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Main (){
    return (
        <div>
            this is main
           
            <Link to="Album">
                <div className="link">Album</div>{" "}
            </Link> 
            <Link to="Photo">
                <div className="link">Photo</div>{" "}
            </Link>
        </div>
    )
}