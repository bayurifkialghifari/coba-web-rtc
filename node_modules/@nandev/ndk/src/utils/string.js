const path = require("path");

class StringHelper {
  /**
   *
   * @param number {number}
   * @param digit {number}
   * @returns {string}
   */
  static padNumber(number, digit = 4) {
    const str = number + '';
    let pad = '';
    for (let i = 0; i < digit; i++) {
      pad += '0';
    }
    return pad.substring(0, pad.length - str.length) + str;
  }
  
  /**
   *
   * @param length {number}
   * @param options
   * @returns {string}
   */
  static randomString(length = 16, options = {
    characters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    unique: false
  }) {
    let characters = options.characters.split('');
    let result = '';
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * characters.length);
      result += characters[index];
      if (options.unique) characters.splice(index, 1);
    }
    
    return result;
  }
  
  /**
   *
   * @param fileName {string}
   * @returns {string}
   */
  getFileExtension(fileName) {
    return path.extname(fileName);
  }
  
  /**
   *
   * @param str {string}
   * @returns {string}
   */
  urlEncode(str) {
    return encodeURIComponent(str);
  }
}

module.exports = StringHelper;
