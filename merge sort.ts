const sortMa: number[] = [4,6,7,8,2,3,4,8,6,2,5,7,9,0,7,6,4,3,6,7,8,6,5,43,6,8,8]

// magicSort(array)
//   chk if array cannot be split (pointers are adj)           -- chk for base contition first so that can escape loop
//     if so                                                   -- and then escape
//        call combine(array, pointerleft, pointerright)
//        return
//     otherwise                                               -- do the recursion
//       magicsort(leftArray)
//       magicsort(rightArray)
//       combine(array, pointerleft, pointerright)             -- call base condition
//
// combine(array,lft,rght)   --recieve 2 arrays that were presorted internally
//   iterate over to combine 
//                           --return single array that is completly sorted

let mergeSort = (referenceTosortMA: number[], pointerStart?: number, pointerEnd?:number) => {
    if (!pointerStart) pointerStart = 0
    if (!pointerEnd) pointerEnd = Math.floor(sortMa.length/2)
    if (pointerStart === pointerEnd - 1) {             // check for base case of pointers adjacent
        combine(referenceTosortMA, pointerStart, pointerEnd);
        return
    }
    let pointerMiddle: number = Math.floor( (pointerStart + pointerEnd)/2 )
    mergeSort(sortMa, pointerStart, pointerMiddle-1)      // pass left side
    mergeSort(sortMa, pointerMiddle, pointerEnd)
    combine (sortMa, pointerStart, pointerMiddle)
    return
}

let combine = (referenceTosortMa: number[], leftStart: number, rightEnd: number) => {
    if (leftStart === rightEnd) return
    let rightStart: number = Math.floor( (leftStart + rightEnd) / 2 )
    let leftEnd: number = rightStart - 1
    for (let i=0; i <= (rightEnd - leftStart); i++) {
        
    }
    return   // don't have to return andy value because function is working on the reference
}