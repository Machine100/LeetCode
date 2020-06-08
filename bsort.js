"use strict";
// Create a basic bubblesort algo. But rules:
//  accurate keystrokes
//  work in all possible vim keys
//  for arrow function: implement it so that it's xyz.sort() instead of sort(xyz) and then do xyz.sort().tocaps
exports.__esModule = true;
var srtMe = [4, 6, 7, 8, 45, 3, 2, 4, 5, 654, 455, 34, 56, 32, 456, 24, 563455, 45, 6, 43, 562, 45, 5, 5, 547, 7, 8, 3, 232, 3, 3];
var sort = function (thing) {
};
var applyToAll = function () {
    var result = srtMe.reduce(function (accumulatedSum, currentValue) { return accumulatedSum + currentValue; });
    console.log(result);
};
applyToAll();
