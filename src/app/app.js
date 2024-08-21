const express = require("express");
const app = express();
const env = require("dotenv").config();

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
    
});

app.get('/users', (req, res) => {
   
});


app.listen(process.env.APP_PORT, () => {
    console.log(`Servidor online...\nhttp://localhost:${process.env.APP_PORT}`);
  }); 