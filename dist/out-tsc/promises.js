function returnAPromise() {
    let promise = new Promise((resolve, reject) => {
        console.log('hello from inside the II executor');
        resolve('the promise resolves into this string');
    });
    console.log(promise);
    return promise;
}
let result = returnAPromise();
console.log(typeof result);
//# sourceMappingURL=promises.js.map