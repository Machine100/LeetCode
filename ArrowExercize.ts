

function plainFunction () {
    console.log('Output from plainFunction via the microtask queue')
    return 9
}

let result:number = plainFunction()