
const NewGuest = () => {

  function addNewGuest(ev:any){
    ev.preventDefault();
    try{
      let  {name, tableNumber} = ev.target.elements;
      name = name.value;
      tableNumber = tableNumber.value;
      console.log( name, tableNumber);

    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
        <h1> Add New Guest</h1>
      <form onSubmit={addNewGuest}>
        <input type="name" name="name" required placeholder='name'/>
        <input type="number" name='tableNumber' required placeholder='table number' />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default NewGuest