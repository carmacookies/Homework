import express from "express";
import mysql from "mysql";
import cookieParser from 'cookie-parser'

const app = express();
const port: number = 4000;

app.use(express.static("./client/build"));
app.use(express.json());
app.use(cookieParser());
export const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "skullcap28394#$@kdmc",
  database: "my_restaurant",
});

connection.connect((err) => {
  try {
    if (err) throw err;

    console.info("🔥 MySQL is connected 🛢 ");
  } catch (error) {
    console.error(error);
  }
})

import usersRoute from './API/users/usersRoute'
app.use('/api/users', usersRoute)

import dishesRoute from './API/dishes/dishesRoute'
app.use('/api/dishes', dishesRoute)

app.post("/api/create-databse", (req, res) => {
  const query = `CREATE DATABASE testDB1;`;
  connection.query(query, (err, results, fields) => {
    try {
      if (err) throw err;

      console.log(results);
      console.log(fields);
      res.send({ ok: true });
    } catch (error) {
      console.error(error);
      res.send({ ok: false, error: error.message });
    }
  });
});
// register user
// login user
// add dish
// add guest


app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
