const express = require('express')
const app = express()

app.use(express.static('src'))

app.listen(process.env.port || 8080, ()=> 
console.log("All is fine")
)