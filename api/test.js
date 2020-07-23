module.exports = (req, res) => {
    console.log('---- api/test.js ----')

    console.log(`DEFINED_IN_CLOUD: ${process.env.DEFINED_IN_CLOUD}`)
    console.log(`NOW_URL: ${process.env.NOW_URL}`)
    console.log(`NOW_REGION: ${process.env.NOW_REGION}`)
    console.log(`VERCEL_URL: ${process.env.VERCEL_URL}`)
    console.log(`VERCEL_REGION: ${process.env.VERCEL_REGION}`)

    res.json({
        haha: true
    });
}
