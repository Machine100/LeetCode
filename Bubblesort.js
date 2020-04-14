// given an array, do a bubble sort.
var sortMe = [];
for (var i_1 = 0; i_1 < 100; i_1++) {
    var randomNumber = Math.floor(Math.random() * 100 + 1);
    sortMe[i_1] = randomNumber;
}
console.log(sortMe);
console.log(sortMe.length);
sortMe.forEach(function () {
    for (var i_2 = 0; i_2 <= sortMe.length - 1; i_2++) {
        if (sortMe[i_2] > sortMe[i_2 + 1]) {
            var temp = sortMe[i_2];
            sortMe[i_2] = sortMe[i_2 + 1];
            sortMe[i_2 + 1] = temp;
            console.log('swapped');
        }
    }
});
console.log(sortMe);
