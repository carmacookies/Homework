import axios from "axios";
import React from "react";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks";
import { loginAsync } from "../user/userApi";


const Login = () => {
const navigate = useNavigate();
async function handleLogin(ev: any) {
        ev.preventDefault();
        try {
            let name = ev.target.elements.name.value;
            let password = ev.target.elements.password.value;
            const response = await axios.post('/api/users/login',{password, name});
            const { ok, user } = response.data
            if (ok == true)
            {
              if (user.userJob == 'cook'){
                navigate('/recipePage')
              }
              if (user.userJob == 'server'){
                navigate('/guestPage')
              }
            }
        } 
        catch (error) {
          console.error(error);
        }
      }
        return (
            <div>
                Login
                <form onSubmit={handleLogin}>
                <input type="name" name="name" placeholder="name" />
                <input type="password" name="password" placeholder="password" />
                <button  type="submit">login</button>
                </form>
    
            </div>
        )
    }


export default Login;