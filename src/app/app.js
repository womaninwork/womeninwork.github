const express = require("express");
const app = express();
const env = require("dotenv").config();
const pool = require('../config/pool_conexoes.js');

var session = require("express-session");
app.use(
  session({
    secret: "HELLo nODE",
    resave: false,
    saveUninitialized: false,
}));

const path = require('path');

app.use(express.static('public'));


// Configurar EJS como template engine
app.set('view engine', 'ejs');
// Definir o diretório de views
app.set('views', path.join(__dirname, 'views'));

// Usar as rotas definidas no arquivo index.js
var router = require("./routes/index.js");
app.use('/', router);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
      return res.status(400).send('Todos os campos são obrigatórios.');
  }

  // Inserir o usuário no banco de dados
  pool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [nome, email, senha],
      (err, results) => {
          if (err) {
              console.error(err);
              return res.status(500).send('Erro ao registrar o usuário.');
          }
          res.json({ message: 'Usuário registrado com sucesso!', redirectTo: '/users' });
      }
  );
});

app.get('/users', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    
    // Enviar os dados como JSON
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).send('Erro ao buscar usuários.');
  }
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Servidor online...\nhttp://localhost:${process.env.APP_PORT}`);
  }); 