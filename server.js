const http = require('http');

http.createServer(function (req, res) {
    console.log(process.env.DEFINED_IN_CLOUD)
    console.log(process.env.VERCEL_URL)

    res.write('Hello World!');
    res.end();
}).listen(process.env.PORT);
