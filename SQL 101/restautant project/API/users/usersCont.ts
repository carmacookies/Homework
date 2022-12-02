import { connection } from "../../server";
import { UserJoi } from "./usersModel";

export function register(req, res) {
  try {
    const { name, job, password  } = req.body;

    const { error } = UserJoi.validate({name, job, password });
    if (error) throw error;

    const query = `INSERT INTO users (user_name, user_job, password) VALUES ('${name}', '${job}', '${password}')`;
    connection.query(query, (err) => {
      try {
        if (err) throw err;
        res.send({ ok: true, user: { job, name }});
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

export function login(req, res){
  try {
    const { password, name } = req.body;
    const query = `SELECT * FROM my_restaurant.users WHERE user_name = '${name}';`
    
    connection.query(query, (err, result) => {
      try {
        if (err) throw err;
        if (result.length === 0) throw new Error(`${name} not exists`);
        if (password == result[0].password){
          const name = result[0].user_name
          const userJob =  result[0].user_job
          res.cookie('user', name)
          res.send({ ok: true, user: { name, userJob}});
          
        }
        else{
          res.send({ ok: false, user: { name }});
        }
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message})
    
  }
}

export function getUserByCookies(req, res){
  try {
    const {user} = req.cookies;
    if (!user) {
      throw new Error("user not found");
    }
     res.send({ok:true, user})
  } catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
  }
}