describe("Item", function () {

  describe("#new", function () {
    it("should be initialised with a maximum quality of 50", function () {
      var testItem = new Item('apple', 3, 51);
      console.log(testItem.quality);
      expect(testItem.quality).toEqual(50);
    });
  });

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

    describe("given AgedBried", function () {
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
      it("should be zero", function () {
        var testItem = new Sulfuras('sulfuras', 1, 50);
        expect(testItem.qualityTomorrow()).toEqual(50);
      });
    });
    describe("given BackStagePass", function () {
      describe("given there are more than 10 days until expiry", function () {
        it("should increase by 1", function () {
          var testItem = new BackStagePass('pass', 11, 20);
          expect(testItem.qualityTomorrow()).toEqual(21);
        });
      })
      describe("given 10 or fewer days until sell-by date", function () {
        it("should increase by 2", function () {
          var testItem = new BackStagePass('pass', 10, 20);
          expect(testItem.qualityTomorrow()).toEqual(22);
        });
      })
      describe("given 5 or fewer days until sell-by date", function () {
        it("should increase by 3");
      })
      describe("given that the item has expired", function () {
        it("should be zero");
      })
    });
  });
});
