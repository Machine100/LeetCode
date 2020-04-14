"use strict";
exports.__esModule = true;
function returnAPromise() {
    var promise = new Promise(function (resolve, reject) {
        console.log('hello from inside the II executor');
        resolve('the promise resolves into this string');
    });
    console.log(promise);
    return promise;
}
var result = returnAPromise();
console.log(typeof result);
