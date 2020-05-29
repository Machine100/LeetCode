const sortMa: number[] = [4,6,7,8,2,3,4,8,6,2,5,7,9,0,7,6,4,3,6,7,8,6,5,43,6,8,8]

let mergeSort = (referenceTosortMA: number[], pointerStart?: number, pointerEnd?:number) => {
    if (pointerStart === null) pointerStart = 0
    if (pointerEnd === null) pointerEnd = Math.ceil(sortMa.length/2)
    if (pointerStart === pointerEnd - 1) {             // check for base case of pointers adjacent
        combine(referenceTosortMA, pointerStart, pointerEnd);
        return
    }
    let pointerMiddle: number = Math.ceil( (pointerStart + pointerEnd)/2 )
    mergeSort(sortMa, pointerStart, pointerMiddle-1)      // pass left side
    mergeSort(sortMa, pointerMiddle, pointerEnd)
    combine (sortMa, pointerStart, pointerMiddle)
    return
}

let combine = (referenceTosortMa: number[], leftStart: number, rightEnd: number) => {
    if (leftStart === rightEnd) return

    let rightStart: number = Math.ceil( (leftStart + rightEnd) / 2 )
    let leftEnd: number = rightStart - 1

    let leftIndex:number = leftStart
    let rightIndex:number = rightStart

    let tempMa: number[] = [] 
    while (leftIndex <= leftEnd && rightIndex <= rightEnd) {
        if (sortMa[leftIndex] <= sortMa[rightIndex]) {
            tempMa.push(sortMa[leftIndex])
            leftIndex++
        } else {
            tempMa.push(sortMa[rightIndex])
            rightIndex++
        }
    }
    while (leftIndex <= leftEnd) {    // if anything left on left side push them all onto end of stack
        tempMa.push(sortMa[leftIndex])
        leftIndex++
    }
    while (rightIndex <= rightEnd) {
        tempMa.push(sortMa[rightIndex])
        rightIndex++
    }
    
    return
}