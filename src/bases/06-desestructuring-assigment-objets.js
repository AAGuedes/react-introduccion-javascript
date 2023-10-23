// Desestructuración

const person = {
    name: 'John',
    age: 18,
    key: 'Anonymous',
}

// Desestructura el objeto a nuevas constantes
// const {name, age, key} = person;

// console.log(name);
// console.log(age);
// console.log(key);



// Se puede hacer la desestructuración en una función
// const getPerson = (person) => {
//     const {name, age, key} = person;
//     console.log(name, age, key);
// }



// También se puede desestructurar cuando recibe los parámetros
const getPerson = ({name, age, key, status = 'Unknown'}) => {
    // console.log(name, age, key, status);
    return {
        newName: name,
        newAge: age,
        newKey: key,
        newStatus: status,
        coords: {
            lat: 1,
            lng: 2
        }
    }
}

const {newName, newAge, newKey, newStatus, coords:{lat, lng}} = getPerson(person);

console.log(newName, newAge, newKey, newStatus);
console.log(lat, lng);
