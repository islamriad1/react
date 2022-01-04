class Person {
    constructor (firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    }
}

const heroPerson = new Person("Hero", "kalam", 40000);
console.log(heroPerson);

function Student(firstName, lastName, fees){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fees = fees;
}

const firstStudent = new Student("Kalam", "Mia", 500);
console.log(firstStudent);