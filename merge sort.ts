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

let mergeSort = (referenceTosortMA: number[]) => {
    let pointerLeft: number = 0
    let pointerRight: number = Math.floor(sortMa.length/2)
    if (pointerLeft === pointerRight - 1) {
        combine(referenceTosortMA, pointerLeft, pointerRight); return}   // check for base case of pointers adjacent
}

let combine = (referenceTosortMa: number[], pointerLeft: number, pointerRight: number) => {
    if (pointerLeft === pointerRight) { return }

    return   // don't have to return andy value because function is working on the reference
}