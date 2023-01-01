const express = require('express')

const dotenv = require('dotenv')
let bodyParser = require('body-parser')
const cors=require('cors')
const shopRouter = require('./router/shop.router')
const DbConnect = require('./config/DbConnect')

let PORT =process.env.PORT || 8080
dotenv.config()
const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(express.json())

app.get('/' , (req , res) => { return  res.send('Namshkar') })
app.use("/shop",shopRouter)



app.listen(PORT,  () => { 
    
    DbConnect();
    console.log(`Live on http://localhost:PORT`) })