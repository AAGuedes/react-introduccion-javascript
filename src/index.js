// Plantillas String

const name = 'John';
const surname = 'Doe';

const fullname = `
${name}
${surname}
${1 + 1}
`;

console.log(fullname);

function getGreeting(fullname) {
    return 'Hello World! ' + fullname;
}

console.log(`This is a text: ${getGreeting(fullname)}`);
