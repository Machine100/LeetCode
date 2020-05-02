// Pascal's triangle
function generateNextline(oldLine) {
    let i;
    let newLine = [1];
    //if (oldLine.length === 1) return ([1,1])
    for (i = 0; i < (oldLine.length - 1); i++) {
        newLine[i + 1] = oldLine[i] + oldLine[i + 1];
    }
    newLine.push(1);
    return newLine;
}
function generateTriangle(rows) {
    let i;
    let currentLine = [1];
    let nextLine;
    console.log(currentLine);
    for (i = 0; i < rows; i++) { // one iteration for each row
        nextLine = generateNextline(currentLine);
        currentLine = nextLine;
        console.log(currentLine);
    }
}
let i;
console.log(generateTriangle(16));
//# sourceMappingURL=Pascal's Triangle.js.map