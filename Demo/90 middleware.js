import express from 'express';
const app=express();
const port=3000;

app.listen(port,()=>{
    console.log(`Server Running on http://localhost:${port}/`);
})

// MiddleWare1
app.use((req,res,next)=>{
    console.log("M1");
    next();
})
app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/:slug",(req,res)=>{
    res.send(`Hello ${req.params.slug}`);
})

app.use(express.static("public"));
