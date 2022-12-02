import { connection } from "../../server";

export function addNewDish(req, res) {
  try {
    const { name, price, cook, recipe, pic  } = req.body;
    
    const query = `INSERT INTO dish (name, price, recipe, cook, pic) VALUES ('${name}', '${price}', '${recipe}', '${cook}', '${pic}')`;
    connection.query(query, (err) => {
      try {
        if (err) throw err;
        res.send({ ok: true});
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export function findDish(req, res){
  const { name } = req.body;
  console.log(name)
  const query = `SELECT * FROM my_restaurant.dish WHERE name LIKE '%${name}%';`
  
  connection.query(query, (err, result) => {
    try {
      if (err) throw err;
      if (result.length === 0) throw new Error(`${name} not exists`);
      res.send(result)
    }
    catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  })
}

export function allDishes(req, res){
    const query = `select * from my_restaurant.dish;`
    connection.query(query, (err, result) => {
      try {
        if (err) throw err;
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    })
}


export function myDish(req, res){
  const { loggedinUser } = req.body;
  console.log(loggedinUser)
  const query = `SELECT * FROM my_restaurant.dish WHERE cook = '${loggedinUser}';`
  
  connection.query(query, (err, result) => {
    try {
      if (err) throw err;
      res.send(result)
    }
    catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  })
}