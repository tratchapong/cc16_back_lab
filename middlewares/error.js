module.exports = (err, req, res, next) => {
    // console.log(err.message.split('::'))
    console.log(err.message)
    let errMsg = err.message.split('::')[0]
    let statusCode = +err.message.split('::')[1] || 500 
    statusCode = err.message.includes('No Teacher found') ? 400 : statusCode
    statusCode = err.message.includes('No Student found') ? 400 : statusCode

    res.status(statusCode).json({ error : errMsg})
}