Gilded Rose Kata
===============================

This kata has been taken from [here](https://github.com/emilybache/GildedRose-Refactoring-Kata), which explains:
* The function of the legacy code
* The new feature to add

The more general aim of this kata is to refactor the legacy code to improve its quality.

## Technologies Used
* JavaScript
* Jasmine

## Notes on approach

At a glance, there are numerous problems with this code. As a means of keeping track of the areas of the code I am focussing on improving, I will keep a small list here of observations I can work on and tasks already completed.

I test-drove a new method to calculate the value of an item tomorrow using a combination of the task specification and the existing legacy code. There were occasionally ambiguities or inconsistencies between the specification and the legacy code, but I incorporated these into the implementation of the `tomorrowQuality` method to ensure I was porting the same behaviour from the legacy code.

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
