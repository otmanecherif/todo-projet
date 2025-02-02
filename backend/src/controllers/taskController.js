let tasks = []; // Simule une base de données en mémoire

// Récupérer toutes les tâches
const getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};

// Ajouter une nouvelle tâche
const createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Le titre est requis' });
  }
  const newTask = { id: tasks.length + 1, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  // Rechercher et mettre à jour la tâche par son ID
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Tâche non trouvée' });
  }

  tasks[taskIndex] = { ...tasks[taskIndex], title, description };
  res.status(200).json(tasks[taskIndex]);
};

const deleteTask = (req, res) => {
  const { id } = req.params;

  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Tâche non trouvée' });
  }

  tasks.splice(taskIndex, 1);
  res.status(200).json({ message: 'Tâche supprimée avec succès' });
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
