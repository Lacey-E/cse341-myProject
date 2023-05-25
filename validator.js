
const { body, validationResult } = require('express-validator')
const contactValidationRules = () => {
  return [
   
    body('headlineName').isLength({min: 2}),
    // password must be at least 5 chars long
    body('category').isLength({ min: 5 }),
     // username must be an email
     body('id').isLength({ min: 5 }),
     body('catchPhrase').isLength({ min: 5 }),
    body('date').isDate()
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
  contactValidationRules,
  validate,
}