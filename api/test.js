module.exports = (req, res) => {
    console.log(process.env.DEFINED_IN_CLOUD)

    res.json({
        haha: true
    });
}
