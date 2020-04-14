"use strict";
exports.__esModule = true;
var Reverser = /** @class */ (function () {
    function Reverser() {
    }
    Reverser.prototype.reverse = function (word) {
        var i;
        var input = [];
        var output = [];
        input = word.split('');
        for (i = 0; i < word.length; i++) {
            output.push(input.pop());
        }
        return output.join('');
    };
    return Reverser;
}());
var reverser = new Reverser;
console.log(reverser.reverse('palindrome'));
