class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class StandardItem extends Item {

  itemTomorrow() {
    this.quality = this._qualityTomorrow();
    this.sellIn--;
    return this;
  }

  _qualityTomorrow () {
    let qualityTomorrow = this.quality - this._calculateDepreciation();
    if (qualityTomorrow < 0) return 0;
    if (qualityTomorrow >= 50) return 50;
    return qualityTomorrow;
  }

  _calculateDepreciation () {
    return this.sellIn === 0 ? 2 : 1;
  }
}

class AgedBrie extends StandardItem {
  _calculateDepreciation () {
    return this.sellIn <= 0 ? (-2):(-1);
  }
}

class Sulfuras extends Item {
  itemTomorrow(){
    return this;
  }
}

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

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateStock (items) {
    return items.map(function(item) {
      return item.itemTomorrow();
    });
  }
}
