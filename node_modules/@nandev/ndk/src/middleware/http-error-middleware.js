const BaseHandler = require('../http/base-handler');

class ErrorMiddleware extends BaseHandler {
  static handleMiddleware(err, req, res, next) {
    if (err) {
      if (err.status === 422) {
        return super.unprocessableEntityResponse(res, err.message, err.details);
      } else {
        return super.internalErrorResponse(res, err.message)
      }
    }
    return next();
  }
}

module.exports = ErrorMiddleware;
