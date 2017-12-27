function timeServer(port) {
    const net = require('net');
    const server = net.createServer((c) => {
        // 'connection' listener
        console.log('client connected:');
        if (!c) {
            c.write("");
            return;
        }
        const d = new Date();
        const dformat = [
            zeroCheck(d.getFullYear()),
            zeroCheck(d.getMonth() + 1),
            zeroCheck(d.getDate())
            ]
            .join('-') +
            ' ' + [
                zeroCheck(d.getHours()),
                zeroCheck(d.getMinutes())
            ].join(':');
        c.write(dformat);
        c.on('end', () => {
            console.log('client disconnected');
        });
        c.end("\n");
    });
    server.on('error', (err) => {
        throw err;
    });
    server.listen(port, () => {
        console.log('server bound');
    });
}
timeServer(process.argv[2]);

function zeroCheck(time) {
    return time < 10 ? "0" + time : time;
}