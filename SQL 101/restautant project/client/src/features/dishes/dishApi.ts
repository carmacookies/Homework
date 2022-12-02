import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface newDishProps{
    name:String;
    price:Number;
    cook:String;
    recipe?:String;
    pic?:String;
}

export const addNewDishAsync = createAsyncThunk(
    'dishes/addNewDish',
    async ({name, price, cook, recipe, pic}:newDishProps) => {
      const response = await axios.post('/api/dishes/addNewDish',{name, price, cook, recipe, pic});
      // The value we return becomes the `fulfilled` action payload
      console.log(response.data);
      return response.data;
    }
  );


interface findDishProps{
    name: String;
}
export const findDishAsync = createAsyncThunk(
    'dishes/findDish',
   async ({name}:findDishProps) => {
    const response = await axios.post('/api/dishes/findDish', {name})
    console.log(response.data);
    return response.data;
   }
)

export const allDishesAsync = createAsyncThunk(
  'dishes/allDishes',
 async () => {
    const response = await axios.post ('/dishes/allDishes')
    console.log('ehoek')
    return response.data
 }
)
