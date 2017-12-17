const http = require('http');
http.get(process.argv[2], (res) => {
  const { statusCode } = res;
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
  let rawData = '';
  res.on('data', (chunk) => {  rawData += chunk +"\n"; });
  
  res.on('end', () => {
    try {
      const parsedData = rawData;
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});