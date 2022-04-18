const http = require('http');
const url = require('url');
const fs = require('fs');

const app = http.createServer((req, res) => {

    let path = url.parse(req.url, true).pathname;
    
    if(path == "" || path == "/"){
        path = "/index.html";
    }
    let fileName = "." + path;
    
    fs.readFile(fileName, (err, data) => {
        if(err){
            res.writeHead(404, {"Content-Type" : "text/html;charset=utf-8"});
            res.end("<h1>Página não encontrada</h1>");

        } else {
            res.writeHead(200, {"Content-Type" : "text/html"});
            res.write(data);
            res.end()
        }
    })
})

app.listen(3000, ()=>console.log('Servidor ON na porta 3000!'));


