console.log('helo')
const express = require ('express')
const PORT = process.env.PORT || 2000
const app = express()

app.use(express.static('public'));
app.use(express.json());

import jokesRoutes from './routes/jokesRoutes'
app.use('/jokes', jokesRoutes)

app.listen(PORT, ()=> {
    console.log("server listening on 2000")
})