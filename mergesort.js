var sortMa = [43, 6, 2];
var mergeSort = function (referenceTosortMA, pointerStart, pointerEnd) {
    if (pointerStart === undefined)
        pointerStart = 0;
    if (pointerEnd === undefined)
        pointerEnd = sortMa.length - 1;
    console.log('pointerStart:', pointerStart, ' pointerEnd: ', pointerEnd);
    if (pointerStart === pointerEnd) { // check for base case of single digit 
        combine(referenceTosortMA, pointerStart, pointerEnd);
        return;
    }
    var pointerMiddle = Math.ceil((pointerStart + pointerEnd) / 2);
    mergeSort(sortMa, pointerStart, pointerMiddle - 1); // pass left side
    mergeSort(sortMa, pointerMiddle, pointerEnd);
    combine(sortMa, pointerStart, pointerMiddle);
    return;
};
var combine = function (referenceTosortMa, leftStart, rightEnd) {
    if (leftStart === rightEnd)
        return;
    var rightStart = Math.ceil((leftStart + rightEnd) / 2);
    var leftEnd = rightStart - 1;
    console.log('combine:', 'LS:', leftStart, 'LE', leftEnd, 'RS', rightStart, 'RE', rightEnd);
    var leftIndex = leftStart;
    var rightIndex = rightStart;
    var tempMa = [];
    while (leftIndex <= leftEnd && rightIndex <= rightEnd) {
        if (sortMa[leftIndex] <= sortMa[rightIndex]) {
            tempMa.push(sortMa[leftIndex]);
            leftIndex++;
        }
        else {
            tempMa.push(sortMa[rightIndex]);
            rightIndex++;
        }
    }
    while (leftIndex <= leftEnd) { // if anything left on left side push them all onto end of stack
        tempMa.push(sortMa[leftIndex]);
        leftIndex++;
    }
    while (rightIndex <= rightEnd) {
        tempMa.push(sortMa[rightIndex]);
        rightIndex++;
    }
    console.log('tempMa:', tempMa);
    for (var i = leftStart; i <= rightEnd; i++) {
        sortMa[i] = tempMa.shift();
    }
    console.log('sortMa:', sortMa);
    return;
};
mergeSort(sortMa);
console.log(sortMa);
