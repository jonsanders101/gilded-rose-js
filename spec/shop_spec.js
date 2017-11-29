describe("Shop", function () {

  describe('#updateStock', function () {
    var gildedRose, items, mockItems, itemsTomorrow;

    beforeEach(function(){
      mockItems =  [{name: "foo", sellIn: 1, quality: 1, qualityTomorrow: () => {return 0}, itemTomorrow: () => {return {name: "foo", sellIn: 0, quality: 0}}},
                    {name: "zero quality", sellIn: 1, quality: 0, qualityTomorrow: () => {return 0}, itemTomorrow: () => {return {name: "zero quality", sellIn: 0, quality: 0}}},
                    {name: "expired", sellIn: 0, quality: 10, qualityTomorrow: () => {return 8}, itemTomorrow: () => {return {name: "expired", sellIn: 0, quality: 8}}},
                    {name: "Aged Brie", sellIn: 10, quality: 10, qualityTomorrow: () => {return 11}, itemTomorrow: () => {return {name: "Aged Brie", sellIn: 9, quality: 11}}},
                    {name: "Aged Brie", sellIn: 10, quality: 50, qualityTomorrow: () => {return 50}, itemTomorrow: () => {return {name: "Aged Brie", sellIn: 9, quality: 50}}},
                    {name: "Aged Brie", sellIn: 0, quality: 20, qualityTomorrow: () => {return 22}, itemTomorrow: () => {return {name: "Aged Brie", sellIn: -1, quality: 22}}},
                    {name: "Sulfuras, Hand of Ragnaros", sellIn: 1, quality: 80, qualityTomorrow: () => {return 80}, itemTomorrow: () => {return {name: "Sulfuras, Hand of Ragnaros", sellIn: 1, quality: 80}}},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 11, quality: 20, qualityTomorrow: () => {return 21}, itemTomorrow: () => {return {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 21}}},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 20, qualityTomorrow: () => {return 22}, itemTomorrow: () => {return {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 9, quality: 22}}},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 20, qualityTomorrow: () => {return 23}, itemTomorrow: () => {return {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 4, quality: 23}}},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 0, quality: 20, qualityTomorrow: () => {return 0}, itemTomorrow: () => {return {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: -1, quality: 0}}}];
      gildedRose = new Shop(mockItems);
      itemsTomorrow = gildedRose.updateStock(mockItems);
    });

    describe("given the item is not Sulfuras", function () {
      it("should decrease sellIn value by one", function () {
          expect(itemsTomorrow[0].sellIn).toEqual(0);
      });
    });
    it("should return list with item name included", function() {
      expect(itemsTomorrow[0].name).toEqual("foo");
    });
    it("should not reduce quality below zero", function () {
      expect(itemsTomorrow[0].quality).toEqual(0);
    });
    describe("given the item is not brie, sulfuras, backstage pass or conjured", function () {
      describe("given the item is within its sell-by-date", function () {
        it("item quality should be reduced by 1", function () {
          expect(itemsTomorrow[0].quality).toEqual(0);
        });
      });
      describe("given the item has expired", function () {
        it("should be two less than current quality", function () {
          expect(itemsTomorrow[2].quality).toEqual(8);
        });
      });
    });
    describe("given AgedBrie", function () {
      it("should increase quality value", function () {
        expect(itemsTomorrow[3].quality).toEqual(11);
      });
      it("should not increase quality value above 50", function () {
        expect(itemsTomorrow[4].quality).toEqual(50);
      });
      describe("given it is passed expiry", function () {
        it("should increase quality value by 2", function () {
          expect(itemsTomorrow[5].quality).toEqual(22);
        });
      });
    });
    describe("given Sulfuras", function () {
      it("should not change quality value", function () {
        expect(itemsTomorrow[6].quality).toEqual(80);
      });
      it("should not reduce sellIn value", function () {
        expect(itemsTomorrow[6].sellIn).toEqual(1);
      });
      describe("given original quality is greater than 50", function () {
        it("should not change quality value", function () {
          expect(itemsTomorrow[6].quality).toEqual(80);
        });
      });
    });
  });

  describe('#updateQuality', function() {

    var gildedRose, items, mockItems;

    beforeEach(function(){
      mockItems =  [{name: "foo", sellIn: 1, quality: 1, qualityTomorrow: () => {return 0}, itemTomorrow: () => {return {name: "foo", sellIn: 0, quality: 0}}},
                    {name: "zero quality", sellIn: 1, quality: 0, qualityTomorrow: () => {return 0}, itemTomorrow: () => {return {name: "zero quality", sellIn: 0, quality: 0}}},
                    {name: "expired", sellIn: 0, quality: 10, qualityTomorrow: () => {return 8}, itemTomorrow: () => {return {name: "expired", sellIn: 0, quality: 8}}},
                    {name: "Aged Brie", sellIn: 10, quality: 10, qualityTomorrow: () => {return 11}, itemTomorrow: () => {return {name: "Aged Brie", sellIn: 9, quality: 11}}},
                    {name: "Aged Brie", sellIn: 10, quality: 50, qualityTomorrow: () => {return 50}, itemTomorrow: () => {return {name: "Aged Brie", sellIn: 9, quality: 50}}},
                    {name: "Aged Brie", sellIn: 0, quality: 20, qualityTomorrow: () => {return 22}, itemTomorrow: () => {return {name: "Aged Brie", sellIn: -1, quality: 22}}},
                    {name: "Sulfuras, Hand of Ragnaros", sellIn: 1, quality: 80, qualityTomorrow: () => {return 80}, itemTomorrow: () => {return {name: "Sulfuras, Hand of Ragnaros", sellIn: 1, quality: 80}}},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 11, quality: 20, qualityTomorrow: () => {return 21}, itemTomorrow: () => {return {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 21}}},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 20, qualityTomorrow: () => {return 22}, itemTomorrow: () => {return {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 9, quality: 22}}},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 20, qualityTomorrow: () => {return 23}, itemTomorrow: () => {return {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 4, quality: 23}}},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 0, quality: 20, qualityTomorrow: () => {return 0}, itemTomorrow: () => {return {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: -1, quality: 0}}}];
      gildedRose = new Shop(mockItems);
      itemsTomorrow = gildedRose.updateStock(mockItems);
      items = gildedRose.updateQuality();
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
  });
});
