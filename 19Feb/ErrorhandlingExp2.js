const fs=require('fs');
fs.readFile('abc.txt',(err,data)=>{
    if(err){
        console.log("Error in reading file");
    }   else { 
        console.log(data.toString());
    }
});
fs.readFile('mytext.txt',(err,data)=>{
    if(err){
        console.log("Error in reading file");
    }   else { 
        console.log(data.toString());
    }   
});