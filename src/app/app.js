const express = require("express");
const app = express();
const env = require("dotenv").config();

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

const PORT = process.env.PORT || 3000; // Use uma porta padrão ou uma variável de ambiente
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});

export default app;
