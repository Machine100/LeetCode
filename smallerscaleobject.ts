function PeopleMaker (firstName:string, lastName:string) {
    this.firstName = firstName
    this.lastName = lastName
}


let firstName:string = 'Bob'
let lastName:string = 'Ross'


let fullName:object = new PeopleMaker(firstName, lastName)
    
console.log(fullName)
console.log(fullName.firstName)