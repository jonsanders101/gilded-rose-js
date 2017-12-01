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
  describe('given that the sellIn value is 0', function () {
    it('sets quality value to 0', function () {
      var testPass = new BackStagePass('pass', 0, 20);
      expect(testPass.itemTomorrow().quality).toEqual(0);
    });
  });
  describe('given that the sellIn value is less than 0', function () {
    it('sets quality value to 0', function () {
      var testPass = new BackStagePass('pass', -1, 20);
      expect(testPass.itemTomorrow().quality).toEqual(0);
    });
  });
});
