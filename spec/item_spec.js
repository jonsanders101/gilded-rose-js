describe("Item", function () {
  describe("#qualityTomorrow", function () {
    it("should never be lower than zero", function () {
      var testItem = new Item('apple', 3, 0);
      expect(testItem.qualityTomorrow()).toEqual(0);
    });
    it("should never be higher than 50", function () {
      var testItem = new Item('apple', 3, 52);
      expect(testItem.qualityTomorrow()).toEqual(50);
    });
    describe("given the item is not brie, sulfuras, backstage pass or conjured", function () {
      describe("given the item is within its sell-by-date", function () {
        it("should by one less than current quality", function () {
          var testItem = new Item('apple', 3, 3);
          expect(testItem.qualityTomorrow()).toEqual(2);
        });
      });
      describe("given the item is past its sell-by-date", function () {
        it("should by two less than current quality", function () {
          var testItem = new Item('apple', 0, 3);
          expect(testItem.qualityTomorrow()).toEqual(1);
        });
      });
    });

    describe("given brie", function () {
      it("should be one more than current quality", function () {
        var testItem = new AgedBrie('brie', 1, 1);
        console.log(testItem.qualityTomorrow());
        console.log(testItem._calculateDepreciation());
        expect(testItem.qualityTomorrow()).toEqual(2);
      });
    });
    describe("given sulfuras", function () {
      it("should be zero", function () {
        var testItem = new Sulfuras('sulfuras', 1, 50);
        expect(testItem.qualityTomorrow()).toEqual(50);
      });
    });
  });
});
