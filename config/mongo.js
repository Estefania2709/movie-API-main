//lamando funcion para conectarse a la base de datos
const mongoose = require("mongoose");

//Se define la funcion dbConnect
const dbConnect = () => {
    // Se obtiene la URL de conexión de la base de datos desde la variable de entorno DB_URI
    const DB_URI = process.env.DB_URI 
    mongoose.connect( 
        // Se establece la conexión con la base de datos usando la URL obtenida anteriormente
        DB_URI, {
        // Establece la configuración para usar la nueva cadena de conexión de MongoDB
        useNewUrlParser: true, 
        // Establece la configuración para usar el nuevo motor de descubrimiento y monitoreo de MongoDB
        useUnifiedTopology: true, 
    });


    // Se obtiene la conexión a la base de datos
    const db = mongoose.connection; 

    // Se define un manejador de errores para la conexión a la base de datos
    db.on('error', console.error.bind(console, 'connection error:'));

    // Se define un manejador de eventos para la conexión a la base de datos
    db.once('open', function() {
        console.log("CONNECTION SUCCESSFULLY");
    }); // Se imprime un mensaje de éxito en la conexión a la base de datos
};

// Se exporta la función dbConnect para que pueda ser usada en otros archivos
module.exports = dbConnect;