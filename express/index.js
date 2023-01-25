const express=require('express');
const app = express();


app.use((req,res)=>{
    res.send(`<h1>The is header</h1>`)
})

app.listen(8080,()=>{
    console.log('listening on port 8080');
})