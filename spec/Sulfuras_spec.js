'use strict';

describe('Sulfuras', function () {
  describe('#itemTomorrow', function () {
    let testSulfuras = new Sulfuras('sulfuras', 1, 80);

    it('does not reduce sellIn value', function () {
      expect(testSulfuras.itemTomorrow().sellIn).toEqual(1);
    });
    it("does not change quality value", function () {
      expect(testSulfuras.itemTomorrow().quality).toEqual(80);
    });
  });
});
