// Matrices

// const array = new Array(10);
const array = [1, 2, 3, 4];

// No se recomienda su uso ya que modifica el original
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);

let newArray = [...array, 5];

// Recorre cada elemento del array y retorna el rsultado
// del callback
const map = newArray.map((number) => number * 2);

console.log(array);
console.log(newArray);
console.log(map)