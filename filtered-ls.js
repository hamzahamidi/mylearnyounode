fs = require('fs');
fs.readdir(process.argv[2], (err, list) => {
    if (err) console.log('error:', err);
    else {
        let output= list.filter(item => item.endsWith('.' + process.argv[3]));
	output.forEach(function(element) {
    console.log(element);
});

    }

})
