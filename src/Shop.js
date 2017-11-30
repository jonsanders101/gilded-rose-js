(function(exports){
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
  exports.Shop = Shop;
}(this));
