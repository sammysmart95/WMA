const express = require('express')
const app = express()

require('dotenv').config()

app.use(express.static('src'))

app.listen(process.env.PORT || 8080, ()=> 
console.log(`App is running in port ${process.env.PORT}`)
)
