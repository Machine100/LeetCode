function PeopleMaker (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}


let firstName = 'Bob'
let lastName = 'Ross'


let fullName = new PeopleMaker(firstName, lastName)
    
console.log(fullName)
console.log(fullName.firstName)