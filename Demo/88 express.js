// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

import express from "express";
const app=express();

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
})

app.get("/",(req,res)=>{
    res.send("Hello World!");
})

app.post("/",(req,res)=>{
    res.send("Post Hello World!");
})

app.get("/blog/:slug",(req,res)=>{
    res.send(`Hello blog is ${req.params.slug}`);
})

app.use(express.static('public'));