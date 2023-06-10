const express = require("express");
const port = 3000;
const app = express();

const taskList = [
  {
    id: 1,
    taskname: "Task1",
    description: "description task 1",
    isCompleted: false,
  },
  {
    id: 2,
    taskname: "Task2",
    description: "description task 2",
    isCompleted: true,
  },
  {
    id: 3,
    taskname: "Task3",
    description: "description task 3",
    isCompleted: false,
  },
  {
    id: 4,
    taskname: "Task4",
    description: "description task 4",
    isCompleted: true,
  },
];

const listViewRouter = require("./list-view-router")(taskList); //Aquí se le pasa el parámetro tasklist al router listViewRouter
const listEditRouter = require("./list-edit-router")(taskList);

app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);

app.listen(port, () => {
  console.log(`server listening in port ${3000}`);
});

app.get("/tasks", (req, res) => {
  res.json(taskList);
});

module.exports = app;
