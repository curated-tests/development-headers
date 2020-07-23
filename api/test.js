module.exports = (req, res) => {
    console.log(process.env.DEFINED_IN_CLOUD)

    console.log(process.env.NOW_URL)
    console.log(process.env.NOW_REGION)
    console.log(process.env.VERCEL_URL)
    console.log(process.env.VERCEL_REGION)

    res.json({
        haha: true
    });
}
