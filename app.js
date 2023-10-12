const models = require("./models");
//models.sequelize.sync().then(()=>)
models.Proyecto.findAll()
.then(r=>{
    r.forEach(proyecto=>{
        console.log(proyecto.dataValues);
    });
    models.sequelize.close();
});
//});

//models.sequelize.sync().then(()=>)
models.Persona.findAll()
.then(r=>{
    r.forEach(persona=>{
        console.log(persona.dataValues);
    });
    models.sequelize.close();
});
//});

models.Donador.findAll()
  .then((result) => {
    result.forEach((donador) => {
      console.log(donador.dataValues);
    });
  })
  .catch((error) => {
    console.error('Error al listar los donadores:', error);
  })
  .finally(() => {
    models.sequelize.close();
  });

  models.Donatario.findAll()
  .then((result) => {
    result.forEach((donatario) => {
      console.log(donatario.dataValues);
    });
  })
  .catch((error) => {
    console.error('Error al listar los donatarios:', error);
  })
  .finally(() => {
    models.sequelize.close();
  });