const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors({
  origin: '*', // Allow all origins (modify this for production to specify allowed origins, e.g., 'http://frontend-domain.com')
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
}));
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
