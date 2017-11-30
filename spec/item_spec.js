describe('Sulfuras', function () {
  describe('#itemTomorrow', function () {
    var testItem = new Sulfuras('sulfuras', 1, 80);

    it('does not reduce sellIn value', function () {
      expect(testItem.itemTomorrow().sellIn).toEqual(1);
    });
    it("does not change quality value", function () {
      expect(testItem.itemTomorrow().quality).toEqual(80);
    });
  });
});

describe('AgedBrie', function () {
  describe('#itemTomorrow', function () {
    it('increases quality value by 1', function () {
      var testBrie = new AgedBrie('brie', 1, 1);
      expect(testBrie.itemTomorrow().quality).toEqual(2);
    });
    it('increases quality value to a maximum of 50', function () {
      var testBrie = new AgedBrie('brie', 3, 50);
      expect(testBrie.itemTomorrow().quality).toEqual(50);
    });
    describe('given that the sellIn value is 0 or less', function () {
      it('increases quality by 2', function () {
        var testBrie = new AgedBrie('brie', 0, 1);
        expect(testBrie.itemTomorrow().quality).toEqual(3);
      });
    });
  });
});

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
