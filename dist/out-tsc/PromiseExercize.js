// Write a program that prints 'done' 10 seconds after an initial 'start' is printed.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function f() {
    return __awaiter(this, void 0, void 0, function* () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('done'), 5000);
        });
        console.log(promise);
        console.log('before await');
        let result = yield promise;
        console.log('result:', result);
        //console.log('after await:', result)
        console.log('this should print ?? the promise resolves');
        return result;
    });
}
//console.log('kddk', f())
f().then((value) => console.log(value));
console.log('got in there first');
//# sourceMappingURL=PromiseExercize.js.map