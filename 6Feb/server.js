const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url=="/"){
        fs.readFile("index.html",'utf-8',(err,htmlContent)=>{
            if(err){
                res.statusCode = 500;
                res.end('internal server error');
                return;
            }
            res.setHeader('Content-Type','text/html');
            res.end(htmlContent);
        });
    }
    else if (req.url=="/style.css"){
        fs.readFile("style.css",'utf-8',(err,cssContent)=>{
            if(err){
                res.statusCode = 500;
                res.end('internal server error');
                return;
            }
            res.setHeader('Content-Type','text/css');
            res.end(cssContent);
        }
        );
    }  else{
        res.statusCode = 404;
        res.end('not found');
    }
});
const port = 3000;
server.listen(8000,()=>{
    console.log(`server is running on port ${port}`);
});