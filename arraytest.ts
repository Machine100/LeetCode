let array: number[] = [11,22,33,44]
// for (let i=0; i<=array.length; i++) {
//     console.log('i:', i)
//     console.log(array[i])
// }

let res: number = array.reduce( (accumulator: number, currentValue: number): number => {return accumulator + currentValue})
console.log(res)