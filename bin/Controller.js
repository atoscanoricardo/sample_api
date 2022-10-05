// Este modulo se encarga de controlar el CRUD de estudiantes y notas
// Lo correcto es hacer uno para cada colección, uno para estudiantes y otro para notas.
const Estudiantes = require("./models/Estudiantes");
const Notas = require("./models/Notas");

// guardar un estudiante 
const setEstudiante = (estudiante, res)=>{  
  Estudiantes.create(estudiante, (err, e)=>{    
    if (err){
      res.send(err)
    }else{
      res.send(e);
    }
  })  
}

// obtebner todos los estudiantes
const getEstudiante = (res)=>{  
  Estudiantes.find({}, (err, e)=>{    
    if (err){
      res.send(err)
    }else{
      res.send(e);
    }
  })  
}

// obtener un estudiante por su id
const getEstudiantePorId = (id, res)=>{
  Estudiantes.find({_id:id}, (err, e)=>{    
    if (err){
      res.send(err)
    }else{
      res.send(e);
    }
  }) 
}

// modificar un estudiante
const putEstudiantePorId = (id, estudiante, res)=>{
  console.log(id, JSON.stringify(estudiante)) 
  Estudiantes.findByIdAndUpdate({_id:id},estudiante, (err, e)=>{    
    if (err){
      res.send(err)
    }else{
      res.send(e);
    }
  }) 
}

// eliminar un estudiante
const deleteEstudiantePorId = (id, res)=>{  
  Estudiantes.findByIdAndDelete({_id:id}, (err, e)=>{    
    if (err){
      res.send(err)
    }else{
      res.send(e);
    }
  }) 
}

// se exportan los controladores del estudiante
module.exports = {
  setEstudiante,
  getEstudiante,
  getEstudiantePorId,
  putEstudiantePorId,
  deleteEstudiantePorId
}



//CRUD https://coursework.vschool.io/mongoose-crud/
//CRUD https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/