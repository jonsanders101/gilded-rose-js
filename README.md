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

### Tasks done
* Passed the initial failing test

### Need work
* Item needs to be guarded it ensure its quality is `0 > quality > 50`
* Some ambiguity on whether an item can be initialised with a quality higher than 50.
* If an item is responsible for increasing its quality, the shop can invoke `updateQuality` on it without worrying about the conditions.
* Should I think of my overall design to this project and slowly change the legacy code into that design, or pick small pieces and work on it incrementally?
* `updateQuality` changes state; the program would be better designed if there were a separate function - like `tomorrowQuality` which gave a return value we could test
