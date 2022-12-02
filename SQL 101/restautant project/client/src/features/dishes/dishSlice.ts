import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk} from '../../app/store'
import { addNewDishAsync } from './dishApi';

export const Dish = {
    _id:{
        type:Number,
    },
    name: {
        type: String,
        unique: true,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    }, 
    recipe:{
        type: String,
        required: false,
    }
}


export enum Status {
    IDLE = "idle",
    LOADING = "loading",
    FAILED = "failed",
  }

export interface AllDishesState {
    allDishes:typeof Dish[]
    filteredDishes: typeof Dish[]
    status: 'idle' | 'loading' | 'failed';
  }
  
  const initialState: AllDishesState = {
    allDishes: [],
    filteredDishes: [],
    status: 'idle',
  };

  
export const dishSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(addNewDishAsync.pending, (state) => {
            state.status = Status.LOADING;
          })
          .addCase(addNewDishAsync.fulfilled, (state, action: PayloadAction<typeof Dish[]>) => {
            state.status = Status.IDLE;
            state.allDishes= action.payload;
          })
          .addCase(addNewDishAsync.rejected, (state) => {
            state.status = Status.FAILED;
          });
      },
   
  });
  
  
  export const allDishesSelector = (state:RootState) => state.dishes.allDishes
  export const filteredDishesSelector = (state:RootState) => state.dishes.filteredDishes
  
  export default dishSlice.reducer;
  

