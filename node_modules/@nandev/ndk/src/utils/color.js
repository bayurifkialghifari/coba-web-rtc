const RandomColor = require('randomcolor');

class ColorHelper {
  /**
   *
   * @param seed {string}
   * @param type {string}
   * @param withTag {boolean}
   * @returns {*}
   */
  static generateRandomColor(seed = null, type = 'light', withTag = true) {
    const color = RandomColor({
      luminosity: type,
      seed: seed ? seed : 'default'
    }).toString()
    return !withTag ? color.replace('#', '') : color
  }
}

module.exports = ColorHelper
