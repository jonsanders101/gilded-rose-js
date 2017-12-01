describe("Shop", function () {

  describe('#updateStock', function () {
    var itemTomorrow, mockItem, shop;

    beforeEach(function() {
      mockItemTomorrow = {};
      mockItem = {itemTomorrow: () => {return mockItemTomorrow;}};
      shop = new Shop([mockItem]);
    });

    it("should call #itemTomorrow on each item", function () {
      spyOn(mockItem, "itemTomorrow");
      shop.updateStock();
      expect(mockItem.itemTomorrow).toHaveBeenCalled();
    });
    it("should return a list of updated items", function () {
      expect(shop.updateStock()).toEqual([mockItemTomorrow]);
    });
  });
});
