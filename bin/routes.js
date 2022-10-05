const connect = require("./connect")
//llamamos el controlador que se encarga de gestionar la base de datos
const controller = require("./Controller");

module.exports = (app) => {
  //creamos la ruta raiz para enviar un mensaje de bienvenida con la version
  app.get("/version", (req, res) => {
      //retornamos un mensaje
      res.send({ version: "1.0.0" });
  });
  
  /** 
    Rutas para estudiante 
  **/
  
  //Agregar a un estudiante
  app.post("/estudiantes", function(req, res) {    
      let estudiante  = req.body;
      controller.setEstudiante(estudiante, res);
  });

  //Traer todos los estudiantes
  app.get("/estudiantes", function(req, res) {          
      controller.getEstudiante(res);
  });

  //Traer un estudiante por id
  app.get("/estudiantes/:id", function(req, res) {    
      let id = req.params.id
      controller.getEstudiantePorId(id, res);
  });

  //modificar un estudiante
  app.put("/estudiantes/:id", function(req, res) {    
      let id = req.params.id
      let estudiante = req.body      
      controller.putEstudiantePorId(id, estudiante, res);
  });

  //eliminar un estudiante
  app.delete("/estudiantes/:id", function(req, res) {    
      let id = req.params.id
      controller.deleteEstudiantePorId(id, res);
  });
}