Gilded Rose Kata
===============================

This is my solution to the 'Gilded Rose' kata in JavaScript.

The 'Gilded Rose' imagines a shop whose items change in quality over time. The program calculates the new quality value of each item for each new day. The kata involves refactoring legacy code and extending its behaviour.

See below for the original specification. I have used Emily Bache's JavaScript translation of the original kata which can be found [here](https://github.com/emilybache/GildedRose-Refactoring-Kata) as my starting point.

## File Manifest

```
|-- gilded-rose-js
    |-- README.md
    |-- SpecRunner.html
    |-- TexttestFixture.html
    |-- lib
    |   |-- jasmine-1.1.0
    |   |   |-- MIT.LICENSE
    |   |   |-- jasmine-html.js
    |   |   |-- jasmine.css
    |   |   |-- jasmine.js
    |   |   |-- jasmine_favicon.png
    |   |-- jasmine-ajax
    |   |   |-- mock-ajax.js
    |   |-- jasmine-jquery-1.3.1
    |   |   |-- jasmine-jquery-1.3.1.js
    |   |-- jquery-1.7.1
    |       |-- jquery-1.7.1.js
    |-- spec
    |   |-- AgedBrie_spec.js
    |   |-- BackStagePass_spec.js
    |   |-- ConjuredItem_spec.js
    |   |-- Shop_spec.js
    |   |-- StandardItem_spec.js
    |   |-- Sulfuras_spec.js
    |-- src
        |-- AgedBrie.js
        |-- BackStagePass.js
        |-- ConjuredItem.js
        |-- Item.js
        |-- Shop.js
        |-- StandardItem.js
        |-- Sulfuras.js
```

## Instructions

```
$ git clone git@github.com:jonsanders101/gilded-rose-js.git
$ cd gilded-rose-js
```

### Viewing the Item List

```
$ open TexttestFixture.html
```

### Running the Test Suite

```
$ open SpecRunner.html
```

## Notes on Approach

I began by test-driving a new implementation which delegated responsibility for how each item should depreciate/appreciate in value to a collection of new item objects, making use of inheritance and polymorphism. This eliminates the original `#updateQuality` method's use of string values to determine the rule to apply.

For most items, `#_calculateDepreciation` determines the change in value. The only exception is 'Sulfuras', whose state never changes. Negative return values result in an increase in quality. I kept it this way round, since most items which appreciate in value are special cases.

When writing test cases for the new implementation, I used a combination of the original specification and the behaviour I could observe in the TexttestFixture. I have not changed the TexttestFixture, besides increasing the number of iterations it displays, and making it instantiate the newly created set of objects rather than the original 'Item'.

The original specification below does not entirely cover the behaviour of the existing legacy code; for instance, it does not mention that "Aged Brie" should increase in value at double the rate once it is past its sell-by date. Since there is no client to consult to clarify the intended behaviour, I had to treat the observed behaviour in the legacy code as the authority when writing unit tests.

I then copied the unit tests for my new implementation to test the original code. I gradually used my new implementation to refactor the existing '#updateQuality' method before eventually replacing it entirely, ensuring I wasn't changing the original behaviour.

Finally, I broke apart the classes into separate files and implemented the new 'Conjured Item' described in the specification.

## Original specification

_Taken from [Emily Bache's translation](https://github.com/emilybache/GildedRose-Refactoring-Kata)_

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a
prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods.
Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We
have a system in place that updates our inventory for us. It was developed by a no-nonsense type named
Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that
we can begin selling a new category of items. First an introduction to our system:

* All items have a SellIn value which denotes the number of days we have to sell the item
* All items have a Quality value which denotes how valuable the item is
* At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

* Once the sell by date has passed, Quality degrades twice as fast
* The Quality of an item is never negative
* "Aged Brie" actually increases in Quality the older it gets
* The Quality of an item is never more than 50
* "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
* "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
* Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
* Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

* "Conjured" items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything
still works correctly. However, do not alter the Item class or Items property as those belong to the
goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code
ownership (you can make the UpdateQuality method and Items property static if you like, we'll cover
for you).

Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a
legendary item and as such its Quality is 80 and it never alters.
