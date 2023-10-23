// Importaciones, exportaciones y funciones
import heroes, { owners } from '../data/heroes';


// Función find
// Retorna la primera coincidencia equivalente a la condición
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeById(2));


// Función filter
// Retorna todas las coincidencias equivalentes a la condición
export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeroeByOwner('DC'));
