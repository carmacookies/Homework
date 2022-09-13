import { useState } from "react";


function Cart() {
  const [newWidth, setNewWidth] = useState()
  function handleChangeCartSize(ev:any){
      const newWidth = ev.target.value
      setNewWidth(newWidth)
  }
  return (
    <div>
        <h1> How Big Do You Want Your Cart?</h1>
        <input type="range" name="" id="" max={300} min={100} onChange={handleChangeCartSize}/><br />
        <img src="https://cdn-icons-png.flaticon.com/512/3737/3737372.png" alt="image of cart" style={{'width':newWidth+'px'}} />
          </div>
  );
}

export default Cart;