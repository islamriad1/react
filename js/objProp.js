const students = [
    {id: 1, name: 'Omar Sunny'},
    {id: 2, name: 'Aslam Sunny'},
    {id: 3, name: 'Mirza Sunny'},
    {id: 4, name: 'Deol Sunny'}
]
// const output = []
// for(let i=0; i<students.length; i++) {
//     student = students[i];
//     const name = student.name;
//     output.push(name)
// }
// console.log(output);
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 2)
const biggerOne = students.find(s => s.id > 2)
console.log(biggerOne);