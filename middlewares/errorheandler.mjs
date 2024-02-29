const errorMiddleware = (err, req, res, next) => {

    const statuscode = res.statusCode ? res.statusCode : 500;

    res.status(statuscode).json({ error: err.message, stack: process.env.NODE_ENV === "devlopment" ? err.stack : null })

    console.log("error middleware")

}

export { errorMiddleware } 