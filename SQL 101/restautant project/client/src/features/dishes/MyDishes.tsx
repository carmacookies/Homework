import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DishCard } from './DishCard';
import Dish from './dish'
import { getUserByCookie, User } from '../RecipePage';

interface myDishProps{
    loggedinUser:any
}
const MyDishes = ({loggedinUser}:myDishProps) => {
  const [myDishes, setMyDishes ] = useState([]) 
  console.log(loggedinUser)
  async function getMyDishes(){
    try{
        const response = await axios.post('/api/dishes/myDishes', {loggedinUser})
        console.log(response.data);
        setMyDishes(response.data)
      
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMyDishes()
  }, [])
  return (
    <div>
    <h2> My Dishes</h2>
      
      {myDishes.map((dish:Dish, idx)=>{
        return(
          <DishCard key={idx} name={dish.name} price={dish.price}/>
        );
      })}
    </div>
  )
}

export default MyDishes