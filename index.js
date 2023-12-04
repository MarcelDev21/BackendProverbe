const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const ProverbeRoute = require('./Routes/ProverbeRoute')
const app = express()
const port = 3000

dotenv.config()
mongoose.connect(process.env.Mongo_Url).then(()=> console.log("db Connected successfully do")).catch((error)=> console.log(error))

app.use(express.json({limit: '100mb'}))
app.use(express.urlencoded({limit: '100mb', extended: true}))

app.use('/api', ProverbeRoute)
app.use('/', (req,res)=> {
    res.status(200).send("connected successfuly")
})
//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.Port || port, () => console.log(`Example app listening on port ${process.env.Port}!`))