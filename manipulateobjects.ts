// make a function contructor then send it a set of names to create people 
// objects on the global scope

function peopleMaker (firstName:string, lastName:string) {
    this.firstName = firstName
    this.lastName = lastName
}

let fullName:object[] = []
let firstName:string[] = ['Bob', 'Tom', 'Joe', 'Frodo', 'Bilbo', 'Cattie']
let lastName:string[] = ['Ross', 'Thumb', 'Namath', 'Baggins', 'Baggins', 'Maybe']

console.log(fullName)
for (let i:number=0; i<=firstName.length; i++) {
   fullName[i] = new peopleMaker(firstName[i], lastName[i]) 
}

console.log(typeof(fullName[0]))
console.log(fullName[0])
let kkd = fullName[0].firstName