const express = require ("express")
const mongoose = require ('mongoose')
const PORT = process.env.PORT || 2000
const app = express()

app.use(express.static('public'));
app.use(express.json());

const mongodb_uri = 'mongodb+srv://CarmaCookies:urTN9UeMHVj0dxMP@cluster0.3ahhotl.mongodb.net/?retryWrites=true&w=majority'

mongoose
	.connect(mongodb_uri)
	.then((res:any) => {
		console.log('Connected to DB');
	})
	.catch((err:any) => {
		console.log('At mongoose.connect:');
		console.error(err.message);
	});


app.listen(PORT, ()=> {
    console.log("server listening on 2000")
})