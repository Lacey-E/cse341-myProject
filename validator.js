const { body, validationResult } = require('express-validator')
const headlineValidationRules = () => {
  return [
    body('headlineName').notEmpty({minLength: 1}),
    body('category').isLength({ min: 4 }),
     body('id.*.number').isInt(),
     body('catchPhrase').isLength({ min: 5 })
  ]
}

const editorValidationRules = () => {
  return [
    body('editorName').notEmpty({minLength: 1}),
    body('position').isLength({ min: 4 }),
     body('category').notEmpty({minLength: 1})
     
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
  editorValidationRules
}