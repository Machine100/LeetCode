// Write a program that prints 'done' 10 seconds after an initial 'start' is printed.

function f () {
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve,1000)
    })
}