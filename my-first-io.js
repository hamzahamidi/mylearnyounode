fs = require('fs');
var br = fs.readFileSync(process.argv[2], 'utf8');
console.log(br.split('\n').length - 1);
