import express from 'express';
import { getUserByCookies, login, register } from './usersCont';
const router = express.Router();

router
.post('/register',register)
.post('/login', login)
.get('/getUserByCookies', getUserByCookies)

export default router;