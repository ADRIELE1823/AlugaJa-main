const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '1234', 
    database: 'alugaja' 
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao MySQL');
});

// -- Principal --
app.get("/", (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');  // Caminho para o arquivo HTML
    res.sendFile(filePath);  // Envia o arquivo HTML para o cliente
})

// -- Imóveis -- 
// Rota para listar imóveis
app.get('/api/imoveis', (req, res) => {
    db.query('SELECT * FROM imoveis', (err, results) => {
        if (err) return res.status(500).json({ erro: 'Erro ao buscar imóveis' });
        res.json(results);
    });
});

// Rota para criar um imóvel
app.post('/api/imoveis', (req, res) => {
    const { tipo, localizacao, quartos, banheiros, garagem, valor_aluguel, descricao, corretor_id } = req.body;
    const query = 'INSERT INTO imoveis (tipo, localizacao, quartos, banheiros, garagem, valor_aluguel, descricao, corretor_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [tipo, localizacao, quartos, banheiros, garagem, valor_aluguel, descricao, corretor_id], (err, results) => {
        if (err) return res.status(500).json({ erro: 'Erro ao criar imóvel' });
        res.json({ mensagem: 'Imóvel criado com sucesso!', id: results.insertId });
    });
});


// -- Clientes --
app.get("/api/clientes", async(req,res) => {
    try {
        const [results] = await db.promise().query("select * from clientes");

        res.json(results);
    } catch (error) {
        console.log("Erro ao pegar clientes", error);
        
    }
})


// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`API rodando na porta http://localhost:${PORT}/`));

