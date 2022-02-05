"use strict";

/*
Create an object that acts a water bottle.
It will need a volume property to store how full or empty the bottle is. 
Volume will be 100 when bottle is full and 0 when empty. 
Give your water bottle methods for 
  - filling it up
  - pouring 10 units of water into it
    Note: You cannot exceed the bottle capacity.
  - drinking 10 units from it
    Note: You cannot drink more than its actual contents.
  - and telling if the bottle is full
  - and telling if the bottle is empty
We made a start on this here by giving you the skeleton of our object.
You have to implement the missing features according to the specification.
*/
// Here is your starting point:
var bottle = {
  volume: 0,
  fillUp: function fillUp() {
    // calling this function should completely fill your bottle (volume = 100);
    this.volume += 100;
  },
  pour: function pour() {
    // calling this function should increase your bottle volume by 10 units;
    if (this.volume < 100) this.volume = +10;
  },
  drink: function drink() {
    // calling this function should decrease your bottle volume by 10 units;
    if (this.volume > 0) this.volume -= 10;
  },
  isFull: function isFull() {
    // this function should return true if your bottle is full;
    return this.volume === 100;
  },
  isEmpty: function isEmpty() {
    // this function should return true if your bottle is empty;
    return this.volume === 0;
  }
};
/*
TIP:
  Remember that for changing properties on the current object inside one of its
  methods you can refer to it by its variable name: `bottle` or by using the keyword `this`.
*/

/*
Extra question:
  Why do you think it is preferred to use `this` inside the object rather than its variable name, in our case `bottle`?
  Leave your answer below:
*/
// Write you answer to the question here

/*!ANSwER: I think we already inside of this Object and no need to call object to assign or change something inside of it, instead of we just say this.element, or it is useful to know which element, the element inside our object!   */

/*
Once you have completed your object run the following 
and see if your answer matches the expected result at the bottom :)
*/

/* ======= TESTS - DO NOT MODIFY =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 4-water-bottle.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("When filled up, bottle is full", function () {
  bottle.volume = 0;
  bottle.fillUp();
  expect(bottle.isFull()).toEqual(true);
});
test("When filled up, bottle is not empty", function () {
  bottle.volume = 0;
  bottle.fillUp();
  expect(bottle.isEmpty()).toEqual(false);
});
test("When emptied, bottle is not full", function () {
  bottle.volume = 0;
  expect(bottle.isFull()).toEqual(false);
});
test("When emptied, bottle is empty", function () {
  bottle.volume = 0;
  expect(bottle.isEmpty()).toEqual(true);
});
test("When partially filled, bottle is not empty", function () {
  bottle.volume = 40; // arbitrary amount

  expect(bottle.isEmpty()).toEqual(false);
});
test("When partially filled, bottle is not full", function () {
  bottle.volume = 40; // arbitrary amount

  expect(bottle.isFull()).toEqual(false);
});
test("Given a full bottle, when pour is called, then the volume does not increase", function () {
  bottle.volume = 100;
  bottle.pour();
  expect(bottle.volume).toEqual(100);
});
test("Multiple calls to drink reduce the volume correctly", function () {
  bottle.volume = 100; // arbitrary number of calls to drink

  bottle.drink();
  bottle.drink();
  bottle.drink();
  expect(bottle.volume).toEqual(70);
});
test("Given a full bottle, when drink has been called, then it is neither full nor empty", function () {
  bottle.volume = 100; // arbitrary number of calls to drink

  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  bottle.drink();
  expect(bottle.isEmpty()).toEqual(false);
  expect(bottle.isFull()).toEqual(false);
});
test("Given a full bottle, when drink called 10 times, then bottle is empty", function () {
  bottle.volume = 100;

  for (var i = 0; i < 10; i++) {
    bottle.drink();
  }

  expect(bottle.isEmpty()).toEqual(true);
});
test("Given an empty bottle, when drink is called, then the volume does not decrease", function () {
  bottle.volume = 0;
  bottle.drink();
  expect(bottle.volume).toEqual(0);
});
test("Given an empty bottle, when pour is called, then the volume increases", function () {
  bottle.volume = 0;
  bottle.pour();
  expect(bottle.volume).toEqual(10);
});
test("Given an empty bottle, calling pour then drink, then the bottle is empty", function () {
  bottle.volume = 0;
  bottle.pour();
  bottle.drink();
  expect(bottle.volume).toEqual(0);
});