import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface userRegister{
    password:string;
    name:string;
    job: Job;
}

interface userLogin{
  password:string;
  name:string;
}

export enum Job {
  COOK = "cook",
  SERVER = "server"
}
export const registerAsync = createAsyncThunk(
    'user/register',
    async ({job, password, name}:userRegister) => {
      const response = await axios.post('/api/users/register',{job, password, name});
      // The value we return becomes the `fulfilled` action payload
      console.log(response.data);
      return response.data;
    }
  );

  export const loginAsync = createAsyncThunk(
    'user/login',
    async ({ password, name}:userLogin) => {
      const response = await axios.post('/api/users/login',{password, name});
      // The value we return becomes the `fulfilled` action payload
      console.log(response.data);
      return response.data;
    }
  );