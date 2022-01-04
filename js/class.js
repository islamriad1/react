class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Gazipur cant. school"
    }
}
const student1 = new Student(2, "Javed");
const student2 = new Student( 3, "Shohag");
console.log(student1, student2)