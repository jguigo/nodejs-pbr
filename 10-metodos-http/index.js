const http = require("http");
const url = require("url");
const fs = require("fs");

function handleFile(req, res, callback) {
   let path = url.parse(req.url, true).pathname;

   if (path == "" || path == "/") {
      path = "/index.html";
   }
   let fileName = "." + path;

   fs.readFile(fileName, (err, data) => {
      if (err) {

         if (callback) {
            if(!callback(req, res)){
                res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
                res.end("<h1>Página não encontrada</h1>");
            };
         }
      } else {
         res.writeHead(200, { "Content-Type": "text/html" });
         res.write(data);
         res.end();
      }
   });
}

function handleRequest(req, res) {
   let path = url.parse(req.url, true).pathname;

   let method = req.method;
   console.log(method)

   if (path == "/teste") {
      res.end("teste");
      return true;
   }
   return false;
}

const app = http.createServer((req, res) => {
   handleFile(req, res, handleRequest);
});

app.listen(3000, () => console.log("Servidor ON na porta 3000!"));

