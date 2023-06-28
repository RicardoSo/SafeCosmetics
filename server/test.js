const myPromise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    const aleatorio = Math.random();
    if (aleatorio > 0.5) {
      resolve('Promesa ejecutada correctamente');
    } else {
      reject('Promesa falló');
    }
  }, 3000);
})

myPromise
  .then( msg => {
    console.log(`Paso por el then y obtuvo: ${msg}`);
  })
  .catch( err => {
    console.log(`Paso por el catch y obtuvo: ${err}`);
  })