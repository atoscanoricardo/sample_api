// Obtenemos las librerias de express paraq montaje del servidor
const express = require("express");
const app = express();

// Llamamos las rutas y vinculamos la instancia de express
require("./bin/middleware")(app);

// Llamamos las rutas y vinculamos la instancia de express
require("./bin/routes")(app);
const PORT = process.env.PORT || 5000;

// Levantamos el servidor
app.listen(PORT, () => {
  // mensaje en consola para indicar que se levantó el servidor
  let listen = `App listening on port:${PORT}`;
  console.log(listen);
});