describe("Shop", function () {

  describe('#updateStock', function () {
    var gildedRose, items, mockItems, itemsTomorrow, itemSpy, itemTomorrow;

    beforeEach(function(){
      itemTomorrow = {name: "foo", sellIn: 0, quality: 0};
      itemSpy = {name: "foo", sellIn: 1, quality: 1, qualityTomorrow: () => {return 0;}, itemTomorrow: () => {return {};}};
      spyOn(itemSpy, "itemTomorrow");

      mockItems =  [{name: "foo", sellIn: 1, quality: 1, qualityTomorrow: () => {return 0}, itemTomorrow: () => {return itemTomorrow}},
                    {name: "zero quality", sellIn: 1, quality: 0, qualityTomorrow: () => {return 0}, itemTomorrow: () => {return {name: "zero quality", sellIn: 0, quality: 0}}},
                    {name: "expired", sellIn: 0, quality: 10, qualityTomorrow: () => {return 8}, itemTomorrow: () => {return {name: "expired", sellIn: 0, quality: 8}}},
                    {name: "Aged Brie", sellIn: 10, quality: 10, qualityTomorrow: () => {return 11}, itemTomorrow: () => {return {name: "Aged Brie", sellIn: 9, quality: 11}}},
                    {name: "Aged Brie", sellIn: 10, quality: 50, qualityTomorrow: () => {return 50}, itemTomorrow: () => {return {name: "Aged Brie", sellIn: 9, quality: 50}}},
                    {name: "Aged Brie", sellIn: 0, quality: 20, qualityTomorrow: () => {return 22}, itemTomorrow: () => {return {name: "Aged Brie", sellIn: -1, quality: 22}}},
                    {name: "Sulfuras, Hand of Ragnaros", sellIn: 1, quality: 80, qualityTomorrow: () => {return 80}, itemTomorrow: () => {return {name: "Sulfuras, Hand of Ragnaros", sellIn: 1, quality: 80}}},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 11, quality: 20, qualityTomorrow: () => {return 21}, itemTomorrow: () => {return {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 21}}},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 20, qualityTomorrow: () => {return 22}, itemTomorrow: () => {return {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 9, quality: 22}}},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 20, qualityTomorrow: () => {return 23}, itemTomorrow: () => {return {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 4, quality: 23}}},
                    {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 0, quality: 20, qualityTomorrow: () => {return 0}, itemTomorrow: () => {return {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: -1, quality: 0}}},
                    itemSpy];
      gildedRose = new Shop(mockItems);
      itemsTomorrow = gildedRose.updateStock(mockItems);
      console.log(itemsTomorrow);
    });

    it("should call #itemTomorrow on each item", function () {
      expect(itemSpy.itemTomorrow).toHaveBeenCalled();
    });
  });
});
