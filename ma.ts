class ReverseString {

    public reverse (inputWord:string) {
    
        var inputArray:string[]
        var popArray:string[]
        var outputArray:string[] = []

        inputArray = inputWord.split('')
        popArray = inputArray
        console.log(inputArray)
        inputArray.forEach( function(item){
            this.outputArray.push(this.popArray.pop)  
        })
    
        console.log(outputArray   )
    }
}

const reverser = new ReverseString()

console.log(reverser.reverse('palindrome'))