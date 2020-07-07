var inputs = ['blue', 'blue,', 'red', 'orange', 'yellow', 'yellow', 'yellow'];
var queries = ['teal', 'orange'];
// for loop
// forEach
// ------------> do with recuce
queries.forEach(function (queryColor) {
    var hitCount = 0;
    inputs.filter(function (inputColor) {
        if (queryColor === inputColor) {
            hitCount++;
        }
    });
    console.log(queryColor, hitCount);
});
