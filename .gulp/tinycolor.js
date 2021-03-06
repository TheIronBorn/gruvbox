(function () {
  'use strict';

  const tinycolor = require('tinycolor2');

  // Sublime Text expects rgb as [r, g, b, a]
  // Tinycolor.toRgb returns an object {r:, g:, b:, a:}
  tinycolor.prototype.toSublimeRgb = function () {
    var _this = this;

    if (!_this.isValid()) {
      throw new Error(`"${_this}" is not a valid color'`);
    }

    var rgba = _this.toRgb();
    var rgb = [rgba.r, rgba.g, rgba.b];

    // Only return an alpha channel when necessary
    if (rgba.a !== 1) {
      rgb.push(rgba.a * 255);
    }

    return rgb;
  };

  tinycolor.prototype.toSublimeHexString = function () {
    var _this = this;

    if (!_this.isValid()) {
      throw new Error(`"${_this}" is not a valid color'`);
    }

    var c = _this.toHexString();

    // Only return an alpha channel when necessary
    if (_this._a !== 1) {
      c = _this.toHex8String();
    }

    return c;
  };

  module.exports = tinycolor;
}());
