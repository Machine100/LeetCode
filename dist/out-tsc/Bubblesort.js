// given an array, do a bubble sort.
let sortMe = [];
for (let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    sortMe[i] = randomNumber;
}
console.log(sortMe);
console.log(sortMe.length);
sortMe.forEach(() => {
    for (let i = 0; i <= sortMe.length - 1; i++) {
        if (sortMe[i] > sortMe[i + 1]) {
            let temp = sortMe[i];
            sortMe[i] = sortMe[i + 1];
            sortMe[i + 1] = temp;
            console.log('swapped');
        }
    }
});
console.log(sortMe);
//# sourceMappingURL=Bubblesort.js.map