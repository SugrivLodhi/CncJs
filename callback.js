// setTimeout(function() {
//     console.log('my Name is Sugriv Lodhi')
// }, 2000);

// function x(y) {
//     console.log('hi');
//     y();
// }

// x(function y() {
//     console.log('Hr');
// })
function Person(names) {
    this.name = names;
}
const person1 = new Person("Baba");
console.log(person1);
// Person { name: 'Arfat' }