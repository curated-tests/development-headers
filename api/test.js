module.exports = (req, res) => {
    console.log('---- api/test.js ----')

    console.log(`x-vercel-deployment-url: ${req.headers['x-vercel-deployment-url']}`)

    res.json({
        haha: true
    });
}
