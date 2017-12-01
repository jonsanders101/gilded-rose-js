describe('ConjuredItem', function () {

  var testConjured;

  beforeEach(function () {
    testConjured = new ConjuredItem('conjured apple', 3, 10);
  });

  describe('given that the sellIn value is greater than 0', function () {
    it('reduces quality value by 2', function () {
      expect(testConjured.itemTomorrow().quality).toEqual(8);
    });
  });
  describe('given that the sellIn value is 0', function () {
    it('increases quality value by 4', function () {
      testConjured.sellIn = 0;
      expect(testConjured.itemTomorrow().quality).toEqual(6);
    });
  });
  describe('given that the sellIn value is less than 0', function () {
    it('increases quality value by 4', function () {
      testConjured.sellIn = -1;
      expect(testConjured.itemTomorrow().quality).toEqual(6);
    });
  });
});
