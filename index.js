// // CommonJS
// // Module
// const { createServer} = require( "http" )
// const server = createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"})
//     res.end("hello")
// })
// const port = 4_000
// server.listen(port,"127.0.0.1", ()=>{
//     console.log(`server running at :${port}`);
// })
const express = require("express")

const app = express()
app.get("/health",(req,res) => res.send({message:"OK"}))
app.listen(3_000,()=>console.info("server running at :3000"))