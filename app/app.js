const express = require('express')
const app = express()
const serverless = require('serverless-http')
const port = 5888;

app.use(express.json())

app.get('/', (req,res)=>{
    return res.json({message:'Hello world I am back to safety'})
})
app.get('/dummy', (req,res)=>{
    return res.json({message:'Hello world Dummy'})
})



app.listen(port,()=>{
    console.log(`listening on the port ${port}`)
})






module.exports.handler = serverless(app)
