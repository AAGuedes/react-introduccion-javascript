// Objetos literales

const person = {
    name: 'John',
    surname: 'Doe',
    age: 18,
    address: {
        city: 'New York',
        lat: 40.730610,
        lng: -73.935242
    }
};


const person2 = {...person};
person2.name = 'Jane';

console.table({person});
console.log(person2);
