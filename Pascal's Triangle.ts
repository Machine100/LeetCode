// Pascal's triangle

function generateNextline (oldLine: number[]) {
    
    let i:number
    let newLine = [1]
    
    //if (oldLine.length === 1) return ([1,1])
    for (i=0; i<(oldLine.length - 1); i++) {
        newLine[i+1] = oldLine[i] + oldLine[i+1]
    }
    newLine.push(1)
    return newLine
}

function generateTriangle (rows:number) {
    
    let i: number
    let currentLine = [1]
    let nextLine: number[]
    
    console.log (currentLine)
    for (i=0; i<rows; i++) {                            // one iteration for each row
        nextLine = generateNextline (currentLine)
        currentLine = nextLine
        console.log (currentLine)

    }
}

let i:number

console.log (generateTriangle(16))