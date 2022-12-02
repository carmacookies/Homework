import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import { addNewDishAsync } from '../dishes/dishApi';
import { User } from '../RecipePage'

interface newDishProps {
  loggedinUser:any
}
const NewDish = ({loggedinUser}:newDishProps) => {
const dispatch = useAppDispatch();

  function addNewDish(ev:any){
    ev.preventDefault();
    try{
      let  {name, price, recipe, pic} = ev.target.elements;
      name = name.value;
      price = price.value;
      recipe = recipe.value;
      pic = pic.value;
      let cook = loggedinUser
      dispatch(addNewDishAsync({name, price, cook, recipe, pic }))
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h2>Add New Dish</h2>
      <form onSubmit={addNewDish}>
        <input type="name" name="name" required placeholder='name'/>
        <input type="price" name='price' required placeholder='price' />
        <input type="recipe" name='recipe'  />
        <input type="url" name="pic"  />
        <button type="submit">Add New Dish</button>
      </form>
    </div>
  )
}

export default NewDish