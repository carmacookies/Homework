// const express = require ('express')
// const mongoose = require ('mongoose')
import express from 'express';
import mongoose from 'mongoose';
const app = express()
app.use(express.static('public'))
app.use(express.json())

const port  = process.env.PORT || 4001;
require('dotenv').config()

const mongodb_uri = process.env.MONGODB_URI;

mongoose
	.connect(mongodb_uri)
	.then(() => {
		console.log('Connected to DB');
	})
	.catch(() => {
		console.log('At mongoose.connect:');
		console.error(Error);
	});

	import usersRoutes from './routes/userRoute';
	app.use('/users', usersRoutes)

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );