// Desestructuración

const name = ['John', 'Jane', 'Miguel', 'Clara'];
const [, , name3] = name;
console.log(name3);



const returnArray = () => {
    return ['ABC', 123];
}

const [letters, numbers] = returnArray();
console.log(letters, numbers);



// Tarea
// 1. El primer valor del arreglo se llamará name
// 2. El segundo se llamará setName
const getName = (value) => {
    return [value, ()=> {console.log('Hello World!')}];
}

// Solución
// Desestructuramos el retorno de la función, pasandole el valor requerido
const [newName, setName] = getName('John');

// Mostramos por consola
console.log(newName);
setName();
