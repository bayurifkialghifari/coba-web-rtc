class ErrorValidation extends Error{
  constructor(message, details) {
    super(message);
    
    Error.captureStackTrace(this, this.constructor);
    
    this.name = this.constructor.name;
    this.status = 422;
    this.details = details;
  }
  
  statusCode() {
    return this.status;
  }
  
  validationDetail() {
    return this.details;
  }
}

module.exports = ErrorValidation;

