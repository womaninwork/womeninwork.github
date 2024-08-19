import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import sqlite3 from 'sqlite3'; // Importando sqlite3
import router from './routes/index.js'; // Ajuste para a extensão .js se for um módulo ES

// Usando sqlite3
sqlite3.verbose();

const app = express();
const dbPath = 'wiwork.db';
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conexão bem-sucedida com o banco de dados SQLite.');
    }
});

db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
)`, (err) => {
    if (err) {
        console.error('Erro ao criar tabela de usuários:', err.message);
    } else {
        console.log('Tabela de usuários criada com sucesso.');
    }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

// Configurar EJS como template engine
app.set('view engine', 'ejs');
// Definir o diretório de views
app.set('views', path.join(__dirname, 'views'));

// Usar as rotas definidas no arquivo index.js
app.use('/', router);

app.post('/register', (req, res) => {
    const { nome, email, senha } = req.body;
    db.run('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], function(err) {
        if (err) {
            console.error('Erro ao inserir dados:', err.message);
            res.status(500).send('Erro ao inserir dados');
        } else {
            console.log(`Dados inseridos com sucesso. ID do último registro: ${this.lastID}`);
            res.send('Usuário registrado com sucesso');
        }
    });
});

app.get('/users', (req, res) => {
    db.all('SELECT * FROM usuarios', [], (err, rows) => {
        if (err) {
            console.error('Erro ao buscar dados:', err.message);
            res.status(500).send('Erro ao buscar dados');
        } else {
            res.json(rows);
        }
    });
});

export default app;
