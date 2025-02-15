const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Middleware para verificar o token JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extrai o token do cabeçalho
  if (!token) return res.sendStatus(401); // Retorna erro se o token não for fornecido

  jwt.verify(token, 'segredo-do-token', (err, user) => {
    if (err) return res.sendStatus(403); // Retorna erro se o token for inválido
    req.user = user; // Anexa o usuário ao objeto de requisição
    next(); // Continua para a próxima função
  });
};

// Simulação de banco de dados para mensagens
let messages = [
  { id: 1, userId: 1, text: 'Olá! Como posso ajudar?' },
  { id: 2, userId: 2, text: 'Estou interessado neste imóvel.' },
];

// Endpoint para listar todas as mensagens
router.get('/messages', authenticateToken, (req, res) => {
  res.json(messages);
});

// Endpoint para enviar uma nova mensagem
router.post('/messages', authenticateToken, (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'O campo "text" é obrigatório.' });
  }

  const newMessage = {
    id: messages.length + 1,
    userId: req.user.userId, // ID do usuário autenticado
    text,
  };

  messages.push(newMessage); // Adiciona a nova mensagem ao array
  res.status(201).json(newMessage); // Retorna a nova mensagem criada
});

module.exports = router;