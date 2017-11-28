describe("Shop", function () {

  describe('#updateQuality', function() {

    var gildedRose, items, mockItem;

    beforeEach(function(){
      mockItems =  [{name: "foo", sellIn: 1, quality: 0},
                    {name: "Sulfuras, Hand of Ragnaros", sellIn: 1, quality: 0}];
      gildedRose = new Shop(mockItems);
      items = gildedRose.updateQuality();
    });
    it("should return list with item name", function() {
      expect(items[0].name).toEqual("foo");
    });
    it('should not reduce quality to less than zero', function () {
      expect(items[0].quality).toEqual(0);
    });
    it('should reduce days to sell by one', function () {
      expect(items[0].sellIn).toEqual(0);
    });
  })
});
