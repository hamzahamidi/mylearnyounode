const http = require('http');
const fs   = require('fs');
/**
 * through2-map is an external library. To add it you either have to install it globally
 * by running the command $ npm i through2-map -s
 * 
 * Or in my case I download the library from github repository https://github.com/brycebaril/through2-map
 * I created a folder node_modules in the root of the project  
 * I copied the library through2-map then I placed the command line in node_modules and then I run $ npm install
 * 
 * Both the methods work!
 * 
 */
const map  = require('through2-map');

const port = process.argv[2];

let server = http.createServer((request, response) => {
    console.log(request.body);
    request.pipe(map( chunk=> {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});


server.listen(port);