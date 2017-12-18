const http = require('http');

function getData(path, numberOfPathsLeft = 0) {
    http.get(path, (res) => {
        const {
            statusCode
        } = res;
        const contentType = res.headers;
        let error;
        if (statusCode !== 200) {
            error = new Error('Request Failed.\n' +
                `Status Code: ${statusCode}`);
        }

        if (error) {
            console.error(error.message);
            // consume response data to free up memory
            res.resume();
            return;
        }

        res.setEncoding('utf8');
        let resData = '';
        res.on('data', (chunk) => {
            resData += chunk;
        });

        res.on('end', () => {
            try {
                console.log(resData);
                if (numberOfPathsLeft + 2 < process.argv.length) getData(process.argv[2 + numberOfPathsLeft + 1], numberOfPathsLeft + 1);
            } catch (e) {
                console.error(e.message);
            }
        });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
}

getData(process.argv[2]);