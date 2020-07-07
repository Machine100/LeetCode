
let inputs: string[] = ['blue', 'blue,', 'red', 'orange', 'yellow', 'yellow', 'yellow']
let queries: string[] = ['teal', 'orange']

// for loop
// forEach
// ------------> do with recuce

queries.forEach((queryColor: string) => {
    let hitCount: number = 0
    inputs.filter((inputColor: string) => {
        if (queryColor === inputColor) { hitCount++ }
    })
    console.log(queryColor, hitCount)
})