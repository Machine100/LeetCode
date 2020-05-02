class Reverser {
    reverse(word) {
        let i;
        let input = [];
        let output = [];
        input = word.split('');
        for (i = 0; i < word.length; i++) {
            output.push(input.pop());
        }
        return output.join('');
    }
}
let reverser = new Reverser;
console.log(reverser.reverse('palindrome'));
//# sourceMappingURL=reversestring.js.map