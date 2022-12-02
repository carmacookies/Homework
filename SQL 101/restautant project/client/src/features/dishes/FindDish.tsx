import axios from 'axios';
import React, { useState } from 'react'
import { DishCard } from './DishCard';
import Dish from './dish'

const FindDish = () => {
  const [foundDishes, setFoundDishes ] = useState([])
  async function findDish(ev:any){
    ev.preventDefault();
    try{
      let  {name} = ev.target.elements;
      name = name.value;
      const response = await axios.post('/api/dishes/findDish', {name})
      setFoundDishes(response.data)
      
    } catch (error) {
      console.error(error);
    }
  }
  console.log(foundDishes)
  return (
    <div>
    <h2> Find a Dish</h2>
      <form onSubmit={findDish}>
        <input type="name" name="name" required placeholder='name'/>
        <button type="submit">Search</button>
      </form>
      {foundDishes.map((dish:Dish, idx)=>{
        return(
          <DishCard key={idx} name={dish.name} price={dish.price}/>
        );
      })}
    </div>
  )
}

export default FindDish