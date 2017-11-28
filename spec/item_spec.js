describe("Item", function () {
  describe("#qualityTomorrow", function () {
    describe("given the item is not brie, sulfuras, backstage pass or conjured", function () {
      describe("given the item is within sell-by-date", function () {
        it("should by one less than current quality", function () {
          var testItem = new Item('apple', 3, 3);
          expect(testItem.qualityTomorrow()).toEqual(2));
        });
      });
    });
  });
});
