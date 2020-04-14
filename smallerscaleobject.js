function PeopleMaker(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
var firstName = 'Bob';
var lastName = 'Ross';
var fullName = new PeopleMaker(firstName, lastName);
console.log(fullName);
console.log(fullName.firstName);
