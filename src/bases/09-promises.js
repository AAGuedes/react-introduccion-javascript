// Promesas
import { getHeroeById } from './bases/08-imp-exp';

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject('No hero found...');
//     }, 2000)
// });

// promise.then((heroe) => {
//     console.log(heroe)
// })
// .catch(err => console.log(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            (heroe === undefined) ?
            reject('No hero found...') :
            resolve(heroe);
        }, 2000)
    });
}

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn);