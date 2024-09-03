import express from 'express'
import cors from 'cors'

const app=express()

const corsOptions={
    origin:"*"
}


app.use(cors(corsOptions))
app.get("/",(req,res)=>{
    res.send("dressify")
})
const port=4000
app.listen(port,async()=>{
    console.log("the server is listening on port ",port);
})

