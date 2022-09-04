import express from  'express';
import {handleRegister, handleLogin} from '../controlers/userCont';
const router = express.Router();

router
.post("/register", handleRegister)
.post("/login", handleLogin)

export default router;