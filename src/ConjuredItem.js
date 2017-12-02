;(function (exports) {
  'use strict';
  class ConjuredItem extends StandardItem {
    _calculateDepreciation () {
      return this.sellIn <= 0 ? 4 : 2;
    }
  }
  exports.ConjuredItem = ConjuredItem;
}(this))
