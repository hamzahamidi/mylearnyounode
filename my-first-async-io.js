fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) console.log('error:',err);
    else console.log(data.split('\n').length-1);
});