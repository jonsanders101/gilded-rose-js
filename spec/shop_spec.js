describe("Shop", function () {

  describe('#updateQuality', function() {
    it("should return list with item name", function() {
      const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("foo");
    });
  })
});
