const path = require('path')
const express = require('express');
const app = express();
const cors = require('cors');





const route = require('./Routes/router')
// const bollywood= require('./Routes/bollywood')

app.use(cors({
    origin:"*"
}))

app.use(route)

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'Routes','index.html'))
// })


app.listen(1433, () => {
    console.log("server is running under the 1433")
})