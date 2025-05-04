const express = require ("express")
const cors= require("cors")
app = express()
app.use(cors()) 
app.use(express.json());
let count = 0;
app.get("/count", (req , res)=>{
    res.json({count: count})
})
app.post("/add", (req, res)=>{
    count= count +1
    res.json({count : count})
    
})
app.post("/subtract", (req, res)=>{
    count= count - 1
    res.json({count : count})
    
})
app.listen(5000, () =>{
    console.log("server started on port 5000");
});