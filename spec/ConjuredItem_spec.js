describe('ConjuredItem', function () {
  describe('given that the sellIn value is greater than 0', function () {
    it('reduces quality value by 2', function () {
      let testConjured = new ConjuredItem('conjured apple', 3, 10);
      expect(testConjured.itemTomorrow().quality).toEqual(8);
    });
  });
  describe('given that the sellIn value is 0', function () {
    it('increases quality value by 4', function () {
      let testConjured = new ConjuredItem('conjured apple', 0, 10);
      expect(testConjured.itemTomorrow().quality).toEqual(6);
    });
  });
  describe('given that the sellIn value is less than 0', function () {
    it('increases quality value by 4', function () {
      let testConjured = new ConjuredItem('conjured apple', -1, 10);
      expect(testConjured.itemTomorrow().quality).toEqual(6);
    });
  });
});
