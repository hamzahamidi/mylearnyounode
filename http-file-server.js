const http = require('http');
const fs = require('fs');

function httpFileServer(port, path) {
    const server = http.createServer(function(request, response){
        const stream = fs.createReadStream(path);
        stream.pipe(response);
    });
    server.listen(port);
}

httpFileServer(process.argv[2], process.argv[3]);