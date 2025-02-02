const express = require('express');
const { getAllTasks, createTask } = require('../controllers/taskController');

const router = express.Router();

// Route pour récupérer toutes les tâches
router.get('/', getAllTasks);

// Route pour ajouter une nouvelle tâche
router.post('/', createTask);

module.exports = router;
