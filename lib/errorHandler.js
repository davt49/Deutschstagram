function errorHandler(err, req, res, next) {
  if (err.message === 'Unauthorized') {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ message: 'Token expired' })
  }
  if (err.name === 'NotFound') {
    return res.status(404).json({ message: 'Not Found' })
  }
  if (err.name === 'ValidationError') {

    const errors = {}
    for (const field in err.errors) {
      errors[field] = err.errors[field].message
    }
    err.errors = errors

    return res.status(422).json({ message: 'Unprocessable Entity', errors })
  }

  res.status(500).json({ message: 'Internal Server Error' })
  next(err)
}

module.exports = errorHandler
