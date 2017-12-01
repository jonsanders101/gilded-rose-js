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
    describe('given that the sellIn value is 0', function () {
      it('increases quality value by 2', function () {
        testItem.quality = 3;
        testItem.sellIn = 0;
        expect(testItem.itemTomorrow().quality).toEqual(1);
      });
    });
    describe('given that the sellIn value is less than 0', function () {
      it('increases quality value by 2', function () {
        testItem.quality = 3;
        testItem.sellIn = -1;
        expect(testItem.itemTomorrow().quality).toEqual(1);
      });
    });
  });
});
