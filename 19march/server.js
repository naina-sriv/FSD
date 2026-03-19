const express=require('express');
const app=express();
const port=3000;
app.get('/hello',(req,res)=>{
    res.send('Test Case 1');
})
app.get('/aboutus',(req,res)=>{
    res.send('Test Case 2');
})
app.post('/',(req,res)=>{
    const {name}=req.body;
    res.send('welcome ${name}');
})

app.listen(port,(error)=>{
    if(error){
        console.error(error);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});