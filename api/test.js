module.exports = (req, res) => {
    console.log(process.env.DEFINED_IN_CLOUD)
    console.log(process.env.VERCEL_URL)

    res.json({
        haha: true
    });
}
