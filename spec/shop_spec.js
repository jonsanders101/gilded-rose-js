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
                    {name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 11, quality: 20},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 20},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 20},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 0, quality: 20},
                    {name: "Aged Brie", sellIn: 0, quality: 20}];
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
      describe("given it is passed expiry", function () {
        it("should increase quality value by 2", function () {
          expect(items[11].quality).toEqual(22);
        });
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

    describe("given BackStagePass", function () {
      describe("given there are more than 10 days until expiry", function () {
        it("should increase by 1", function () {
          expect(items[7].quality).toEqual(21);
        });
      });
      describe("given 10 or fewer days until sell-by date", function () {
        it("should increase by 2", function () {
          expect(items[8].quality).toEqual(22);
        });
      });
      describe("given 5 or fewer days until sell-by date", function () {
        it("should increase by 3", function () {
          expect(items[9].quality).toEqual(23);
        });
      });
      describe("given that concert has happened", function () {
        it("should be zero", function () {
          expect(items[10].quality).toEqual(0);
        });
      });
    });
    it("should return list with item name included", function() {
      expect(items[0].name).toEqual("foo");
    });
  });
});
