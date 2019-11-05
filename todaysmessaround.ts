import { number } from "prop-types"

class Reverser {
    reverse (word:string) {
        let i:number
        let input:string[] = []
        let output:string[] = []
        input = word.split('')
        for (i=0;i<word.length;i++){
            output.push(input.pop())
        }
        return output.join('')
    }
}

let reverser = new Reverser
console.log(reverser.reverse('palindrome'))