const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Importar rotas
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');

// Inicializar o servidor
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});