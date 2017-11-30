describe("Shop", function () {

  describe('#updateStock', function () {
    var gildedRose, items, mockItems, itemsTomorrow, itemSpy, itemTomorrow;

    beforeEach(function(){
      itemTomorrow = {name: "foo", sellIn: 0, quality: 0};
      itemSpy = {name: "foo", sellIn: 1, quality: 1, qualityTomorrow: () => {return 0;}, itemTomorrow: () => {return {};}};
      spyOn(itemSpy, "itemTomorrow");
      mockItems =  [itemSpy];
      gildedRose = new Shop(mockItems);
      itemsTomorrow = gildedRose.updateStock(mockItems);
      console.log(itemsTomorrow);
    });
    it("should call #itemTomorrow on each item", function () {
      expect(itemSpy.itemTomorrow).toHaveBeenCalled();
    });
    it("should return a list of updated items", function () {
      itemTomorrow = {name: "foo", sellIn: 0, quality: 0};
      mockItem = [{name: "foo", sellIn: 1, quality: 1, qualityTomorrow: () => {return 0;}, itemTomorrow: () => {return itemTomorrow;}}];
      gildedRose = new Shop(mockItem);
      itemsTomorrow = gildedRose.updateStock(mockItem);
      expect(itemsTomorrow).toEqual([itemTomorrow]);
    });
  });
});
