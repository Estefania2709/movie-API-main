// Importación de módulos y paquetes necesarios
const express = require("express"); // Framework para aplicaciones web en Node.js
const cors = require("cors"); // Middleware que permite el intercambio de recursos entre diferentes orígenes
const app = express(); // Creación de la aplicación Express
const dbConnect = require("./config/mongo") // Conexión a la base de datos MongoDB
app.use(cors()); // Configuración de CORS

app.use(express.json()); // Configuración para usar el formato de datos JSON

require("dotenv").config(); // Carga de variables de entorno desde un archivo .env

app.use("/", require("./routes")); // Definición de la ruta principal y manejo de solicitudes entrantes 
                                    //mediante el archivo index.js en el directorio routes
const port = process.env.PORT || 3000;  // Definición del puerto en el que se ejecutará la aplicación

app.listen(port, () => {    // Inicio del servidor
    console.log(`SERVER RUNNING ON PORT ${port}`);
});

dbConnect(); // Conexión a la base de datos
