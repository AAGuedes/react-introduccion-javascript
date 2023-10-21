// Funciones

const greeting = function(name) {
    return `Hello ${name}`;
}

const newGreeting = (name) => `Hello ${name}`;

console.log(greeting('John Doe'));
console.log(newGreeting('Jane Doe'));



const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'John Doe',
    }
}

const newGetUser = () => ({
    uid: 'ABC123',
    username: 'John Doe',
})

console.log(getUser());
console.log(newGetUser());


// Tarea
// 1. Transformar a función lambda
// 2. Retornar objeto implicito
// 3. Probar el código modificado
function getActiveUser(name) {
    return {
        uid: 'ABC',
        username: name,
    }
}

const activeUser = getActiveUser('Jason Dow');
console.log(activeUser);

// Solución
const newGetActiveUser = (name) => ({
    uid: 'ABC',
    username: name,
});

const newActiveUser = newGetActiveUser('Test');
console.log(newActiveUser);
