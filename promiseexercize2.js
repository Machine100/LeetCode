var giveMeAPromise = function () {
    var insidePromise = new Promise(function (resolve, reject) {
    });
    return insidePromise;
};
var promiseOpject = giveMeAPromise();
console.log(promiseOpject);
