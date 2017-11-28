describe("Shop", function () {

  describe('#updateQuality', function() {

    var gildedRose, items, mockItem;

    beforeEach(function(){
      mockItems =  [{name: "foo", sellIn: 1, quality: 1},
                    {name: "Sulfuras, Hand of Ragnaros", sellIn: 1, quality: 0}];
      gildedRose = new Shop(mockItems);
      items = gildedRose.updateQuality();
    });
    describe("given that item is not brie, sulfuras, backstage pass", function () {
      it("should reduce quality value by 1", function () {
        expect(items[0].quality).toEqual(0);
      });
    });
    it("should return list with item name included", function() {
      expect(items[0].name).toEqual("foo");
    });
    it('should not reduce quality to less than zero', function () {
      expect(items[0].quality).toEqual(0);
    });
    describe('given the item is not Sulfuras', function () {
      it('should reduce days to sell by one', function () {
        expect(items[0].sellIn).toEqual(0);
      });
    });
    describe('given the item is "Sulfuras"', function () {
      it('should not reduce sellIn value', function () {
        expect(items[1].sellIn).toEqual(1);
      });
    });
  });
});
