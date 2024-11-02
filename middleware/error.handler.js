//Errors middlewares 
function logErrors(error,req,res,next) {
  console.log('logErrors')
  console.error(error)
  next(error)
}

function boomErrorHandler(err,req,res,next) {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  } else next(err)
}

function errorHandler(err,re,res,next) {
  console.log("Error Handler")
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

module.exports = { logErrors,errorHandler,boomErrorHandler }
