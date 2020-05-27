const sortMa: number[] = [4,6,7,8,2,3,4,8,6,2,5,7,9,0,7,6,4,3,6,7,8,6,5,43,6,8,8]
let sorted: number[][] = []
// mergesort the array
// first    split it into pairs
// then sort each pair
// then take adjacent pairs and left to right compare into new array

let stepTheSort = (inputArray: number[][]) => {   // takes an array of arrays, returns and array of arrays but half as many elements
    let temp: number[] = []
    for (let ii=0; ii<=Math.floor(inputArray.length); i+2) {
        // compare index i with i+1
        for (let jj=0; jj<=inputArray.length; jj++) {    // cycle through most granular element
            temp.push()
        }
    }
}
