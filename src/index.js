// Importaciones, exportaciones y funciones
import { heroes } from './data/heroes';


// Función find
// Retorna la primera coincidencia equivalente a la condición
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroeById(2));



// Función filter
// Retorna todas las coincidencias equivalentes a la condición
const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(getHeroeByOwner('DC'));
