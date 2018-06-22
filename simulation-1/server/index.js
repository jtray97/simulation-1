const express = require('express')
const bodyParser = require('express')
const app = express()
const port = 3001
var massive = require('massive');
require('dotenv').config()
app.use(bodyParser.json())
massive(process.env.CONNECTION_STRING).then(db =>{
    app.set('db', db)
}).catch(err=>{console.log(err)})



	





app.listen(port, ()=>{console.log(`getting ${port} hoes`)})