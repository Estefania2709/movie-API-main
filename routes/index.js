const express = require('express'); // Importa el módulo express
const router = express.Router(); // Crea una instancia de un enrutador de Express
const fs = require('fs'); // Importa el módulo fs de Node.js


// Obtiene el directorio actual
const pathRouter = `${__dirname}`;


// Función que recibe un nombre de archivo y devuelve su nombre sin la extensión
const removeExtension = (fileName) => fileName.split('.').shift();


// Lee los archivos dentro del directorio actual
fs.readdirSync(pathRouter)
  // Filtra los archivos que no deben ser incluidos en el enrutador
  .filter((file) => !['index'].includes(removeExtension(file)))
  // Añade cada archivo restante al enrutador
  .forEach((file) => {
    const noExtension = removeExtension(file);
    // Se agrega una ruta específica para cada archivo del directorio
    router.use(`/${noExtension}`, require(`./${noExtension}`));
    // Muestra en consola el archivo que se agregó al enrutador
    console.log('ROUTES ->', noExtension);
});

router.get('*', (req, res) => {
  res.status(404).send({ error: 'Not found' });
});

module.exports = router;