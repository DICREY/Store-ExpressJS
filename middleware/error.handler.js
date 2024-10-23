function logErrors(error,req,res,next) {
  console.log('logErrors')
  console.error(error)
  next(error)
}

function errorHandler(err,re,res,next) {
  console.log("Error Handler")
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

module.exports = { logErrors,errorHandler }
