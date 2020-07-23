const http = require('http')

http.createServer(function (req, res) {
    console.log('---- server.js ----')

    console.log(`DEFINED_IN_CLOUD: ${process.env.DEFINED_IN_CLOUD}`)
    console.log(`NOW_URL: ${process.env.NOW_URL}`)
    console.log(`NOW_REGION: ${process.env.NOW_REGION}`)
    console.log(`VERCEL_URL: ${process.env.VERCEL_URL}`)
    console.log(`VERCEL_REGION: ${process.env.VERCEL_REGION}`)

    res.write('Hello World!')
    res.end()
}).listen(process.env.PORT)
