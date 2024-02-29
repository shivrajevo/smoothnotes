const requeststatus = (req, res, next) => {

    console.log(req.query)
    console.log(req.query.username)
    console.log(req.query.token)
    next()

}

export { requeststatus }