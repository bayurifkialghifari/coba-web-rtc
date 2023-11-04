const util = require("util");
const ColorUtil = require('./color');

const AvatarSprites = {
  BOTS: 'bottts',
  MALE: 'male',
  FEMALE: 'female',
  HUMAN: 'human',
  IDENTICON: 'identicon',
  INITIALS: 'initials',
  JDENTICON: 'jdenticon',
  GRIDY: 'gridy'
}

class Avatar {
  /**
   *
   * @param seed {string}
   * @param sprites {string}
   * @param size {number}
   * @returns {string}
   */
  static generateRandomAvatar(seed, sprites = 'bottts', size = 64) {
    return `https://avatars.dicebear.com/api/${sprites}/${seed}.svg?size=${size}`;
  }
  
  /**
   *
   * @param name
   * @param size
   * @param background
   * @param color
   * @returns {string}
   */
  static generateAvatarByName(name, size = 128, background = null, color = null) {
    return util.format(
      'https://ui-avatars.com/api/?name=%s&size=%d&background=%s&color=%s', encodeURIComponent(name),
      size,
      background ?? ColorUtil.generateRandomColor(name, 'dark', false),
      color ?? ColorUtil.generateRandomColor(name, 'light', false)
    )
  }
}

module.exports.Avatar = Avatar
module.exports.AvatarSprites = AvatarSprites
