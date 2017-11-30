describe('Sulfuras', function () {
  describe('#itemTomorrow', function () {
    var testSulfuras = new Sulfuras('sulfuras', 1, 80);

    it('does not reduce sellIn value', function () {
      expect(testSulfuras.itemTomorrow().sellIn).toEqual(1);
    });
    it("does not change quality value", function () {
      expect(testSulfuras.itemTomorrow().quality).toEqual(80);
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

describe('BackStagePass', function () {
  describe('given that the sellIn value is greater than 10', function () {
    it('increases quality value by 1', function () {
      var testPass = new BackStagePass('pass', 11, 20);
      expect(testPass.itemTomorrow().quality).toEqual(21);
    });
  });
  describe('given that the sellIn value is 10 or less', function () {
    it('increases quality value by 2', function () {
      var testPass = new BackStagePass('pass', 10, 20);
      expect(testPass.itemTomorrow().quality).toEqual(22);
    });
  });
  describe('given that the sellIn value is 5 or less', function () {
    it('increases quality value by 3', function () {
      var testPass = new BackStagePass('pass', 5, 20);
      expect(testPass.itemTomorrow().quality).toEqual(23);
    });
  });
  describe('given that the sellIn value is 0 or less', function () {
    it('sets quality value to 0', function () {
      var testPass = new BackStagePass('pass', 0, 20);
      expect(testPass.itemTomorrow().quality).toEqual(0);
    });
  });

});

describe('StandardItem', function () {

  var testItem;

  beforeEach(function () {
    testItem = new StandardItem('apple', 3, 0);
  });

  describe('#itemTomorrow', function () {
    it('reduces sellIn value by 1', function () {
      expect(testItem.itemTomorrow().sellIn).toEqual(2);
    });
    it('reduces quality value to a minimum of 0', function () {
      expect(testItem.itemTomorrow().quality).toEqual(0);
    });
    describe('given that the sellIn value is greater than 0', function () {
      it('reduces quality value by 1', function () {
        testItem.quality = 3;
        expect(testItem.itemTomorrow().sellIn).toEqual(2);
      });
    });
    describe('given that the sellIn value is 0 or less', function () {
      it('increases quality value by 2', function () {
        testItem.quality = 3;
        testItem.sellIn = 0;
        expect(testItem.itemTomorrow().quality).toEqual(1);
      });
    });
  });
});
