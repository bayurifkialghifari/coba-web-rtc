const bcrypt = require('bcrypt')

class BcryptHelper {
  /**
   *
   * @param {string} plainText
   * @returns {string}
   */
  static hash(plainText) {
    return bcrypt.hashSync(plainText, 10)
  }
  
  /**
   *
   * @param {string} plainText
   * @param {string} encryptedData
   * @returns {boolean}
   */
  static compare(plainText, encryptedData) {
    return bcrypt.compareSync(plainText, encryptedData)
  }
}

module.exports = BcryptHelper
