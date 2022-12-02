import axios from "axios";
import { useEffect, useState } from "react";
import AllDish from "./dishes/AllDishes"
import FindDish from "./dishes/FindDish"
import MyDishes from "./dishes/MyDishes";
import NewDish from "./dishes/NewDish"

export interface User{
  user_id:string;
  user_name:string;
  user_job:string;
}
export async function getUserByCookie(){
    try{
      const { data } = await axios.get("/api/users/getUserByCookies");
      if (!data) throw new Error('data not found')
      const {user} = data;
      if(!user){
          throw new Error('User not found');
      }
      return (user)
    }
    catch (error) {
        console.error(error)
    }
  }
  
const RecipePage = () =>{
    const [loggedinUser, setLoggedinUser] = useState<User>()
    
    const user = getUserByCookie()
    async function setUser(){
      console.log(user)
      setLoggedinUser(await user)
      console.log(loggedinUser)
    }
    useEffect(() => {
      setUser()
    }, [])
    return (
        <div>
            <h1>Recipe Page</h1>
            <NewDish loggedinUser={loggedinUser}/>
            <FindDish/>
            <AllDish/>
            <MyDishes loggedinUser={loggedinUser}/>
        </div>
    )
}
export default RecipePage
