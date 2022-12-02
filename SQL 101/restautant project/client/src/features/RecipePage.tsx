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

  
const RecipePage = () =>{
  const [loggedinUser, setLoggedinUser] = useState<User>()
  async function getUserByCookie(){
    try{
      const { data } = await axios.get("/api/users/getUserByCookies");
      if (!data) throw new Error('data not found')
      const {user} = data;
      if(!user){
          throw new Error('User not found');
      }
      setLoggedinUser( user)
      return (user)
    }
    catch (error) {
        console.error(error)
    }
  }
    useEffect(() => {
      getUserByCookie()
    }, [])
    console.log(loggedinUser)
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
