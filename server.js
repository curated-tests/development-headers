const http = require('http')

http.createServer(function (req, res) {
    console.log('---- server.js ----')

    console.log(`x-vercel-deployment-url: ${req.headers['x-vercel-deployment-url']}`)

    res.write('Hello World!')
    res.end()
}).listen(process.env.PORT)
