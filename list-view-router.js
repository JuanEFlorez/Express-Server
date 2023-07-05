const express = require("express");
const listViewRouter = express.Router();

// Definición del enrutador para la vista de lista
module.exports = (taskList) => {
  // Ruta GET para obtener las tareas completadas
  listViewRouter.get("/completed", (req, res) => {
    // Filtrar las tareas completadas en base a la propiedad 'isCompleted'
    const completedTasks = taskList.filter((task) => task.isCompleted === true);
    res.json(completedTasks);
  });

  // Ruta GET para obtener las tareas incompletas
  listViewRouter.get("/incomplete", (req, res) => {
    // Filtrar las tareas incompletas en base a la propiedad 'isCompleted'
    console.log("Hola Mundo", taskList);
    const incompleteTasks = taskList.filter(
      (task) => task.isCompleted === false
    );
    res.json(incompleteTasks);
  });

  return listViewRouter;
};
