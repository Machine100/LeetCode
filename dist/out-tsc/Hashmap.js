// given an array of integers, show how many times each value appears
// arrow functions preserve the lexical value of this.
let integers = [4, 3, 5, 6, 7, 8, 6, 5, 4, 4, 3, 3, 4, 5, 6, 77, 7, 5, 34, 3, 5, 5, 65];
let hashMap = new Map();
// let hashMap = new Object.create(Object.prototype) what is passed in is the prototype to use
console.log(hashMap);
// new vim command: to surround text with a symbol use ys w ( 
// new vim command: to go to end of the document G
// adjustment: use the standard built-in object Map to create a hashmap in js instead of using a bare object.
// for reasons, but an important one is that Map generates an object that is an iterable.
// iterate through integers
// if key doesn't exist, add it to the map
//   otherwise increment the existing key
integers.forEach((item) => {
    console.log('hashMap.has(item):', hashMap.has(item));
    console.log('item:', item);
    if (hashMap.has(item)) {
        hashMap.set(item, hashMap.get(item) + 1);
        console.log('Has the item');
    }
    else {
        hashMap.set(item, '0');
    }
});
console.log(hashMap);
//# sourceMappingURL=Hashmap.js.map