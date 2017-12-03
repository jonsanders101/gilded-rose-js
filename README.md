Gilded Rose Kata
===============================

This is my solution to the 'Gilded Rose' kata in JavaScript.

The 'Gilded Rose' imagines a shop whose items change in quality over time. The program calculates the new quality value of each item each new day.The kata involves refactoring legacy code in order to simplify adding new behaviour to it.

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

## Notes on approach

At a glance, there are numerous problems with this code. As a means of keeping track of the areas of the code I am focussing on improving, I will keep a small list here of observations I can work on and tasks already completed.

I test-drove a new method to calculate the value of an item tomorrow using a combination of the task specification and the existing legacy code. There were occasionally ambiguities or inconsistencies between the specification and the legacy code, but I incorporated these into the implementation of the `tomorrowQuality` method to ensure I was porting the same behaviour from the legacy code.

Spec doesn't mention it, but brie depreciates by two after expiry. Again, incorporating it into my code to stay loyal to behaviour of source code

### Tasks done
* Passed the initial failing test

### Need work
* Item needs to be guarded it ensure its quality is `0 > quality > 50`
* Some ambiguity on whether an item can be initialised with a quality higher than 50.
* If an item is responsible for increasing its quality, the shop can invoke `updateQuality` on it without worrying about the conditions.
* Should I think of my overall design to this project and slowly change the legacy code into that design, or pick small pieces and work on it incrementally?
* `updateQuality` changes state; the program would be better designed if there were a separate function - like `tomorrowQuality` which gave a return value we could test
* Instructions state '“Aged Brie” actually increases in Quality the older it gets', but it doesn't say what happens when it reaches expiry. I am going to choose
* Writing my own logic before deleting previous logic
* Creating new item types which are extensions from the standard item class
* The guard against `quality` rising above 50 is part of the qualityTomorrow method, and therefore applies to all items. Though it won't affect all items currently, as standard items only depreciate in value, it is a principle related to all items. Also, placing this line in the `Item` class avoids repetition of the line in multiple classes whose `quality` does increase, and repetition of tests in each item.
* The specification says `The Quality of an item is never more than 50`. I'm choosing to interpret this to mean that an item can't be instantiated with a value greater than 80. At the moment, this is corrected at the first `qualityTomorrow`.
* Decided to work on a new branch 'update-quality' to begin refactoring the original `#updateQuality` method.
* Noticed that sellIn doesn't decrease fo Sulfuras; it's not only the case that the sell-in is irrelevant
* Checking against strings is less reliable and requires longer lines of code than checking type
* My qualityTomorrow method correct the quality if it's above 80; it's arguable that it should do this because the specification states that quality should never be above 50. However, given that:
* the previous program does not reduce the quality;
* and there is no explicit instruction that quality values already higher than 50 should be reduced either at initialisation or when the quality is updated
I'm going to change this

* Added `if (this.quality > 50) return this.quality;` to code which feels pointless, against my design, but loyal to the original code.

Improve existing test
* Replaced 'guilded rose spec' with separate specs for shop and item.
* Replaced new Item with a mock

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
