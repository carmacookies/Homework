import express from 'express';
import { addNewDish, allDishes, findDish, myDish } from './dishesCont';
const router = express.Router();

router
.post('/addNewDish',addNewDish)
.post('/findDish', findDish)
.post('/allDishes', allDishes)
.post('/myDishes', myDish)

export default router;