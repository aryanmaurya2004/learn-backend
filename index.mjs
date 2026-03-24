import express from 'express'
const server = express()
const port = 5000


// server.get("/"),(req,res) =>{
//     res.josn({massage:"apple"})
// }
server.get("/hello"),(req,res)=>{
    res.josn({massage:"banana mane kela "})
}

server.listen(port,()=>{
    console.log(`server started on ${port}`)
})