const http = require('http');


const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ texto: "<h1>Hello World!</h1>" }));
})

app.listen(3000, (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('Servidor online na porta 3000');
    }
})

