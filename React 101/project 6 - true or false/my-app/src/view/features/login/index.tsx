import React from "react";
import { useState } from "react";
import {Link } from "react-router-dom"

interface user{
    email:string,
    password:string
}
const users:Array<user>=[
    {   email:"one@one.com",
        password: "123"
    },
    {
        email:"two@two.com",
        password:'123'
    }
]
const Login = () => {
const [error, setError] = useState<string | null>(null);
  const [newPage, setNewPage] = useState<boolean>(false);
    function handleLogin(ev: any) {
        ev.preventDefault();
        try {
          const email = ev.target.elements.email.value;
          const password = ev.target.elements.password.value;
            if(users.find((user)=>user.password===password)){
                setNewPage(true)
            }
        } 
        catch (error) {
          console.error(error);
        }
      }
      if (newPage===true){
        return(
            <Link  to="/game">Play The Game</Link>
        )
      }
      else{
        return (
            <div>
                Login
                <form onSubmit={handleLogin}>
                    <input type="email" name="email" placeholder="email" />
                    <input type="password" name="password" placeholder="password" />
                    
                <button  type="submit">login</button>
                </form>
    
            </div>
        )
    }
}

export default Login;