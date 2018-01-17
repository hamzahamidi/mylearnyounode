const http = require('http');
const fs   = require('fs');
const map  = require('through2-map');

const port = process.argv[2];

let server = http.createServer((request, response) => {
    console.log(request.body);
    request.pipe(map( chunk=> {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});


server.listen(port);