var array = [11, 22, 33, 44];
// for (let i=0; i<=array.length; i++) {
//     console.log('i:', i)
//     console.log(array[i])
// }
var res = array.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
console.log(res);
