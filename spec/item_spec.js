describe("Item", function () {

  describe("#qualityTomorrow", function () {
    it("should never be lower than zero", function () {
      var testItem = new Item('apple', 3, 0);
      expect(testItem.qualityTomorrow()).toEqual(0);
    });
    describe("given the item is not brie, sulfuras, backstage pass or conjured", function () {
      describe("given the item is within its sell-by-date", function () {
        it("should by one less than current quality", function () {
          var testItem = new Item('apple', 3, 3);
          expect(testItem.qualityTomorrow()).toEqual(2);
        });
      });
      describe("given the item has expired", function () {
        it("should by two less than current quality", function () {
          var testItem = new Item('apple', 0, 3);
          expect(testItem.qualityTomorrow()).toEqual(1);
        });
      });
    });

    describe("given AgedBrie", function () {
      it("should be one more than current quality", function () {
        var testItem = new AgedBrie('brie', 1, 1);
        expect(testItem.qualityTomorrow()).toEqual(2);
      });
      it("should never be higher than 50", function () {
        var testItem = new AgedBrie('brie', 3, 50);
        expect(testItem.qualityTomorrow()).toEqual(50);
      });
    });
    describe("given Sulfuras", function () {
      it("should not change quality value", function () {
        var testItem = new Sulfuras('sulfuras', 1, 50);
        expect(testItem.qualityTomorrow()).toEqual(50);
      });
      describe("given original quality is greater than 50", function () {
        it("should not change quality value", function () {
          var testItem = new Sulfuras('sulfuras', 1, 80);
          expect(testItem.qualityTomorrow()).toEqual(80);
        });
      });
    });
    describe("given BackStagePass", function () {
      describe("given there are more than 10 days until expiry", function () {
        it("should increase by 1", function () {
          var testItem = new BackStagePass('pass', 11, 20);
          expect(testItem.qualityTomorrow()).toEqual(21);
        });
      });
      describe("given 10 or fewer days until sell-by date", function () {
        it("should increase by 2", function () {
          var testItem = new BackStagePass('pass', 10, 20);
          expect(testItem.qualityTomorrow()).toEqual(22);
        });
      });
      describe("given 5 or fewer days until sell-by date", function () {
        it("should increase by 3", function () {
          var testItem = new BackStagePass('pass', 5, 20);
          expect(testItem.qualityTomorrow()).toEqual(23);
        });
      });
      describe("given that concert has happened", function () {
        it("should be zero", function () {
          var testItem = new BackStagePass('pass', 0, 20);
          expect(testItem.qualityTomorrow()).toEqual(0);
        });
      })
    });
  });
});
