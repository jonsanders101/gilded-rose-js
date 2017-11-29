describe("Item", function () {

  var testItem;

  beforeEach(function () {
    testItem = new Item('apple', 3, 0);
  });

  describe('#itemTomorrow', function () {
    describe('given that it is not sulfuras', function () {
      it('should reduce sellIn value by one', function () {
        expect(testItem.itemTomorrow().sellIn).toEqual(2);
      });
    });
    describe('given that the item is sulfuras', function () {
      it('should not reduce sellIn value', function () {
        testItem = new Sulfuras('sulfuras', 1, 80);
        expect(testItem.itemTomorrow().sellIn).toEqual(1);
      });
    });
    describe("#qualityTomorrow", function () {
      it("should never be lower than zero", function () {
        expect(testItem.itemTomorrow().quality).toEqual(0);
      });
      describe("given the item is not brie, sulfuras, backstage pass or conjured", function () {
        describe("given the item is within its sell-by-date", function () {
          it("should by one less than current quality", function () {
            var testItem = new Item('apple', 3, 3);
            expect(testItem.itemTomorrow().quality).toEqual(2);
          });
        });
        describe("given the item has expired", function () {
          it("should be two less than current quality", function () {
            var testItem = new Item('apple', 0, 3);
            expect(testItem.itemTomorrow().quality).toEqual(1);
          });
        });
      });

      describe("given AgedBrie", function () {
        it("should be one more than current quality", function () {
          var testItem = new AgedBrie('brie', 1, 1);
          expect(testItem.itemTomorrow().quality).toEqual(2);
        });
        it("should never be higher than 50", function () {
          var testItem = new AgedBrie('brie', 3, 50);
          expect(testItem.itemTomorrow().quality).toEqual(50);
        });
        describe("given it is passed expiry", function () {
          it("should be two more than current quality", function () {
            var testItem = new AgedBrie('brie', 0, 1);
            expect(testItem.itemTomorrow().quality).toEqual(3);
          });
        });
      });
      describe("given Sulfuras", function () {
        it("should not change quality value", function () {
          var testItem = new Sulfuras('sulfuras', 1, 80);
          expect(testItem.itemTomorrow().quality).toEqual(80);
        });
        describe("given original quality is greater than 50", function () {
          it("should not change quality value", function () {
            var testItem = new Sulfuras('sulfuras', 1, 80);
            expect(testItem.itemTomorrow().quality).toEqual(80);
          });
        });
      });
      describe("given BackStagePass", function () {
        describe("given there are more than 10 days until expiry", function () {
          it("should increase by 1", function () {
            var testItem = new BackStagePass('pass', 11, 20);
            expect(testItem.itemTomorrow().quality).toEqual(21);
          });
        });
        describe("given 10 or fewer days until sell-by date", function () {
          it("should increase by 2", function () {
            var testItem = new BackStagePass('pass', 10, 20);
            expect(testItem.itemTomorrow().quality).toEqual(22);
          });
        });
        describe("given 5 or fewer days until sell-by date", function () {
          it("should increase by 3", function () {
            var testItem = new BackStagePass('pass', 5, 20);
            expect(testItem.itemTomorrow().quality).toEqual(23);
          });
        });
        describe("given that concert has happened", function () {
          it("should be zero", function () {
            var testItem = new BackStagePass('pass', 0, 20);
            expect(testItem.itemTomorrow().quality).toEqual(0);
          });
        })
      });
    });
  });
});
