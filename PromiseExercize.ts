// Write a program that prints 'done' 10 seconds after an initial 'start' is printed.

async function f () {
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve('done'), 5000)
    })
    console.log(promise)
    console.log('before await')
    let result = await promise
    console.log('result:', result)
    //console.log('after await:', result)
    console.log('this should print ?? the promise resolves')
    return result 
}
//console.log('kddk', f())
f().then((value) => console.log(value))
console.log('got in there first')