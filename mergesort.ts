let sortMa: number[] = [43,6,2,1,6,2,6,9,7,5,444,3]

let mergeSort = (referenceTosortMA: number[], pointerStart?: number, pointerEnd?:number) => {
    if (pointerStart === undefined) pointerStart = 0
    if (pointerEnd === undefined) pointerEnd = sortMa.length - 1 
    console.log('pointerStart:', pointerStart,' pointerEnd: ', pointerEnd)

    if (pointerStart === pointerEnd) {             // check for base case of single digit 
        combine(referenceTosortMA, pointerStart, pointerEnd);
        return
    }
    let pointerMiddle: number = Math.ceil( (pointerStart + pointerEnd)/2 )
    mergeSort(sortMa, pointerStart, pointerMiddle-1)      // pass left side
    mergeSort(sortMa, pointerMiddle, pointerEnd)
    combine (sortMa, pointerStart, pointerEnd)
    return
}

let combine = (referenceTosortMa: number[], leftStart: number, rightEnd: number) => {
    if (leftStart === rightEnd) return

    let rightStart: number = Math.ceil( (leftStart + rightEnd) / 2 )
    let leftEnd: number = rightStart - 1
    console.log('combine:', 'LS:', leftStart,'LE',leftEnd,'RS',rightStart,'RE',rightEnd)
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
    console.log('tempMa:', tempMa)
    for (let i=leftStart; i<=rightEnd; i++) {
        sortMa[i] = tempMa.shift()
    } 

    console.log('sortMa:', sortMa)
        return
}

mergeSort(sortMa)
console.log(sortMa)