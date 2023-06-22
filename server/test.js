const promise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    const aleatorio = Math.random();
    if (aleatorio < 0.5) {
      resolve('Done!');
    } else {
      reject('Falló');
    }
  }, 3000);
})

promise
  .then( message => {
    console.log(`Promesa resuelta, mensaje: ${message}`);
})
  .catch( error => {
    console.log(`Promesa no cumplida: ${error}`);
  })