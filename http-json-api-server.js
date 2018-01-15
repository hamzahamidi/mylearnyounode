const http = require('http');
const url = require('url');
 
const PORT = process.argv[2];
 
let server =  http.createServer((req, res) => {
 
    let q = url.parse(req.url, true);
    let response;
    let date = new Date(q.query.iso);
 
    if(q.pathname === '/api/parsetime'){
        response = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        }
         
    }
 
    if(q.pathname === '/api/unixtime'){
        response = {
            unixtime: date.getTime()
        }
    }
 
    (response)
        ? res.writeHead(200, { 'Content-Type': 'application/json' })
        : res.writeHead(404);
     
    res.end(JSON.stringify(response || ''));
     
}).listen(PORT);