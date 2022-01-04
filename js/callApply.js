const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: '15000',
    getFullName: function() {
        console.log(this.firstName , this.lastName);
    },
    chargeBill: function(amount, tips, tax) {
        console.log(this)
        this.salary = this.salary - (amount + tips + tax);
        return this.salary;
    }
}
const heroPerson = {
    firstName : 'Hero',
    lastName : 'Balam',
    salary :30000
}
const friendlyPerson = {
    firstName : 'Hero',
    lastName : 'kalam',
    salary :25000
}

// normalPerson.chargeBill();
// const heroChargebill = normalPerson.chargeBill.bind(heroPerson);
// heroChargebill(2000)


// normalPerson.chargeBill.call(heroPerson, 900);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 1500, 100, 15);
// console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 100, 30]);
console.log(heroPerson.salary);