describe("Shop", function () {

  describe('#updateQuality', function() {

    var gildedRose, items, mockItem;

    beforeEach(function(){
      mockItems =  [{name: "foo", sellIn: 1, quality: 1},
                    {name: "Sulfuras, Hand of Ragnaros", sellIn: 1, quality: 0},
                    {name: "zero quality", sellIn: 1, quality: 0},
                    {name: "expired", sellIn: 0, quality: 10},
                    {name: "Aged Brie", sellIn: 10, quality: 10},
                    {name: "Aged Brie", sellIn: 10, quality: 50},
                    {name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80}];
      gildedRose = new Shop(mockItems);
      items = gildedRose.updateQuality();
    });
    it("should not reduce quality below zero", function () {
      expect(items[2].quality).toEqual(0);
    });
    describe("given the item is not brie, sulfuras, backstage pass or conjured", function () {
      describe("given the item is within its sell-by-date", function () {
        it("item quality should be reduced by 1", function () {
          expect(items[0].quality).toEqual(0);
        });
      });
      describe("given the item has expired", function () {
        it("should by two less than current quality", function () {
          expect(items[3].quality).toEqual(8);
        });
      });
    });
    describe("given AgedBrie", function () {
      it("should increase quality value", function () {
        expect(items[4].quality).toEqual(11);
      });
      it("should not increase quality value above 50", function () {
        expect(items[5].quality).toEqual(50);
      });
    });
    describe("given Sulfuras", function () {
      it("should not change quality value", function () {
        expect(items[6].quality).toEqual(80);
      });
      describe("given original quality is greater than 50", function () {
        it("should not change quality value", function () {
          expect(items[6].quality).toEqual(80);
        });
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
