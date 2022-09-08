const express = require ('express')
import { getJokeOne, getJokeTwo, getJokeThree } from "../controllers/jokesCont"
const router = express.Router()

router
.post('/jokeone', getJokeOne )
.get('/joketwo', getJokeTwo)
.get('/jokethree', getJokeThree)

export default router;