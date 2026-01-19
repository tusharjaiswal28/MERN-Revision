const express = require("express");
const app = express();

app.use(express.json());

const PORT = 8080;

let tasks = [];
let nextId = 1;


app.get('/test', (req, res) => {
  res.send('Hello World')
})

app.post("/tasks", (req, res) => {
  const { title, description, status } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      message: "Title and description are required"
    });
  }

  const task = {
    id: nextId++,
    title,
    description,
    status: status || "pending"
  };

  tasks.push(task);

  res.status(201).json(task);
});

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  res.status(200).json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  tasks.splice(index, 1);

  res.status(204).send();
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})