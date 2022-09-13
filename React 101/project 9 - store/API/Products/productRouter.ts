import express from "express"
import { addProduct } from "./productControlers"
const router = express.Router()

router
.post('/addProduct', addProduct)

export default router