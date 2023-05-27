
const { body, validationResult } = require('express-validator')
const headlineValidationRules = () => {
  return [
   
    
    body('headline').isString(),
    body('category').isLength({ min: 4 }),
     body('id').isNumeric(),
     body('catchPhrase').isLength({ min: 5 })
  ]
}


// headlineName: req.body.headlineName,
//       category: req.body.category,
//       id: req.body.id,
//       catchPhrase: req.body.catchPhrase,
//       date: req.body.date


const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()

  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  headlineValidationRules,
  validate,
}