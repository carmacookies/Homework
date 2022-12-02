import React, { useEffect, useState } from 'react'
import { DishCard } from './DishCard';
import Dish from './dish'
import axios from 'axios';

const AllDish = () => {
  const [dishArray, setDishArray ] = useState([])
  async function allDishes() {
    const response = await axios.post ('/api/dishes/allDishes')
    setDishArray(response.data)
 }
  useEffect(() => {
    allDishes()
  }, [])
  console.log(dishArray)
  return (
    <div>
      <h2>All Dishes</h2>
      {dishArray.map((dish:Dish, idx)=>{
        return(
          <DishCard key={idx} name={dish.name} price={dish.price}/>
        );
      })}
    </div>
  )
}

export default AllDish