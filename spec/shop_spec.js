describe("Shop", function () {

  describe('#updateStock', function () {
    var shop, items, mockItems, itemsTomorrow, itemSpy, itemTomorrow;

    it("should call #itemTomorrow on each item", function () {
      itemSpy = {itemTomorrow: () => {return {};}};
      spyOn(itemSpy, "itemTomorrow");
      shop = new Shop([itemSpy]);
      shop.updateStock(shop.items);
      expect(itemSpy.itemTomorrow).toHaveBeenCalled();
    });
    it("should return a list of updated items", function () {
      itemTomorrow = {name: "foo", sellIn: 0, quality: 0};
      mockItem = {name: "foo", sellIn: 1, quality: 1, qualityTomorrow: () => {return 0;}, itemTomorrow: () => {return itemTomorrow;}};
      shop = new Shop([mockItem]);
      itemsTomorrow = shop.updateStock(shop.items);
      expect(itemsTomorrow).toEqual([itemTomorrow]);
    });
  });
});
