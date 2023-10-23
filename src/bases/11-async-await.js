// Async - Await
// const getImagePromise = () => {
//     const promise = new Promise((resolve, reject) => {
//         resolve('Image URL')
//     })
//     return promise;
// }

// getImagePromise()
//     .then(console.log)

const getImage = async () => {
    try {
        const apiKey = '';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await response.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // Error control
        console.log(error);
    }
}

getImage();
