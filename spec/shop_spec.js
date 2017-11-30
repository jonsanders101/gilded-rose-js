describe("Shop", function () {

  describe('#updateStock', function () {
    var itemTomorrow, mockItem, shop;

    beforeEach(function() {
      itemTomorrow = {};
      mockItem = {itemTomorrow: () => {return itemTomorrow;}};
      shop = new Shop([mockItem]);
    });

    it("should call #itemTomorrow on each item", function () {
      spyOn(mockItem, "itemTomorrow");
      shop.updateStock(shop.items);
      expect(mockItem.itemTomorrow).toHaveBeenCalled();
    });
    it("should return a list of updated items", function () {
      itemsTomorrow = shop.updateStock(shop.items);
      expect(itemsTomorrow).toEqual([itemTomorrow]);
    });
  });
});
