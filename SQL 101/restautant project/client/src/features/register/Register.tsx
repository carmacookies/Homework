import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import { registerAsync } from '../user/userApi';

const Register = () => {
const dispatch = useAppDispatch();

  function handleRegister(ev:any){
    ev.preventDefault();
    console.log('register')
    try{
      
      let  {job, password, name} = ev.target.elements;
      job = job.value;
      password =password.value;
      name = name.value;

      console.log( password, name);

      dispatch(registerAsync({job, password, name}))
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input type="name" name="name" required placeholder='name'/>
        <input type="password" name="password" required placeholder='password'/>
        <select name="job" id="job" >
          <option value="cook">Cook</option>
          <option value="server">Server</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register