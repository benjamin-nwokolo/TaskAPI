const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const { default: mongoose } = require('mongoose')
const notFound = require('./middlewares/notfound')


//middlewares
app.use(express.json())
app.use(express.static('./public'));

//routes

app.use('/api/v1/tasks' , tasks)
app.use(notFound )



const port = 3000 || process.env.PORT
connectDB();
 mongoose.connection.once('open', () =>{
    console.log('connected to db');
    app.listen(port, console.log(`server is listening on ${port}`))
 })


