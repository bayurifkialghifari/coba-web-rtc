const {
  Avatar,
  AvatarSprites
} = require('./src/utils/avatar');

module.exports.Avatar = Avatar;
module.exports.AvatarSprites = AvatarSprites;

const BcryptHelper = require('./src/crypto/bcrypt');

module.exports.BcryptHelper = BcryptHelper;

const ErrorValidation = require('./src/errors/validation');

module.exports.ErrorValidation = ErrorValidation;

const HTTPBaseHandler = require('./src/http/base-handler');

module.exports.HTTPBaseHandler = HTTPBaseHandler;

const HTTPErrorMiddleware = require('./src/middleware/http-error-middleware');

module.exports.HTTPErrorMiddleware = HTTPErrorMiddleware;

const AvatarUtil = require('./src/utils/avatar');
const ColorUtil = require('./src/utils/color');
const StringUtil = require('./src/utils/string');

module.exports.AvatarUtil = AvatarUtil;
module.exports.ColorUtil = ColorUtil;
module.exports.StringUtil = StringUtil;

const BaseValidator = require('./src/validator/base-validator');

module.exports.BaseValidator = BaseValidator;
