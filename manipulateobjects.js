// make a function contructor then send it a set of names to create people 
// objects on the global scope
function peopleMaker(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
var fullName = [];
var firstName = ['Bob', 'Tom', 'Joe', 'Frodo', 'Bilbo', 'Cattie'];
var lastName = ['Ross', 'Thumb', 'Namath', 'Baggins', 'Baggins', 'Maybe'];
console.log(fullName);
for (var i_1 = 0; i_1 <= firstName.length; i_1++) {
    fullName[i_1] = new peopleMaker(firstName[i_1], lastName[i_1]);
}
console.log(typeof (fullName[0]));
console.log(fullName[0]);
var kkd = fullName[0].firstName;
