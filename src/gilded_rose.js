class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  qualityTomorrow () {
    if (this.quality > 50) return this.quality;
    let qualityTomorrow = this.quality - this._calculateDepreciation();
    if (qualityTomorrow < 0) return 0;
    if (qualityTomorrow >= 50) return 50;
    return qualityTomorrow;
  }

  _calculateDepreciation () {
    return this.sellIn === 0 ? 2 : 1;
  }
}

class AgedBrie extends Item {
  _calculateDepreciation () {
    return this.sellIn <= 0 ? (-2):(-1);
  }
}

class Sulfuras extends Item {
  _calculateDepreciation () {
    return 0;
  }
}

class BackStagePass extends Item {
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

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].quality = this.items[i].qualityTomorrow();
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
    }

    return this.items;
  }
}
