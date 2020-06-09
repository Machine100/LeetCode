// Create a basic bubblesort algo. But rules:
//  accurate keystrokes
//  work in all possible vim keys
//  for arrow function: implement it so that it's xyz.sort() instead of sort(xyz) and then do xyz.sort().tocaps

import { number } from "prop-types"

let srtMe: number[] = [4,6,7,8,45,3,2,4,5,654,455,34,56,32,456,24,563455,45,6,43,562,45,5,5,547,7,8,3,232,3,3]

let sort = () => {
    for (let i=0; i<=srtMe.length; i++) {
        for (let j=0; j<=srtMe.length-1-i; j++) {
            console.log('JI:', j, i)
            if (srtMe[j]<srtMe[j+1]) {
                let temp = srtMe[j]; srtMe[j]=srtMe[j+1]; srtMe[j+1]=temp   // swap the values
                console.log(i,j)
            }
        }
    }
}

let applyToAll = () => {
    const result = srtMe.reduce((accumulatedSum, currentValue) => accumulatedSum + currentValue)
    console.log(result)
}

sort()
console.log(srtMe)