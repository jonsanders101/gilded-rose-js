(function(exports) {
  class BackStagePass extends StandardItem {
    _calculateDepreciation () {
      if (this.sellIn === 0) {
        return this.quality;
      } else if (this.sellIn <= 5) {
        return (-3);
      } else if (this.sellIn <= 10) {
        return (-2);
      } else {
        return (-1);
      }
    }
  }
  exports.BackStagePass = BackStagePass;
}(this))
