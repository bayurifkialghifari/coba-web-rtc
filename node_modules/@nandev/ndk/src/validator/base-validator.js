const ErrorValidation = require('../errors/validation');

class BaseValidator {
  constructor() {
  
  }
  
  validateParam(Schema, request) {
    const validate = Schema.validate(request.params);
    if (validate.error) {
      throw new ErrorValidation(validate.error.message, validate.error.details);
    }
    
    return validate.value;
  }
  
  validateParamAsync(Schema, request) {
    return Schema.validateAsync(request.params)
      .then(validate => {
        return validate.value;
      })
      .catch(error => {
        throw new ErrorValidation(error.message, error.details)
      });
  }
  
  validateQuery(Schema, request) {
    const validate = Schema.validate(request.query);
    if (validate.error) {
      throw new ErrorValidation(validate.error.message, validate.error.details)
    }
    
    return validate.value;
  }
  
  validateQueryAsync(Schema, request) {
    return Schema.validateAsync(request.query)
      .then((validate) => {
        return validate.value
      }).catch(error => {
        throw new ErrorValidation(error.message, error.details)
      });
  }
  
  validateBody(Schema, request, files = undefined, allowUnknown = false) {
    const validate = Schema.validate(request.body, {
      allowUnknown: allowUnknown
    });
    
    if (validate.error) {
      throw new ErrorValidation(validate.error.message, validate.error.details)
    }
    
    if (files) validate.value.files = files;
    
    return validate.value;
  }
  
  async validateBodyAsync(Schema, request, files = undefined, allowUnknown = false) {
    const validate = await Schema.validateAsync(request.body, {
      allowUnknown: allowUnknown
    });
    if (validate.error) {
      throw new ErrorValidation(validate.error.message, validate.error.details)
    }
    
    if (files) validate.files = files;
    
    return validate.value;
  }
  
  static getErrorType() {
    return 'ErrorValidation';
  }
}

module.exports = BaseValidator;
