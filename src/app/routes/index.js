const express = require('express');
const {
    index,
    ca_aut,
    cadastro,
    cadastroProf,
    cursos,
    cursos2,
    marketingCursos,
    perfilAut,
    sobrenos
} = require('../controllers/pageController.js'); // Ajuste a extensão se necessário

const router = express.Router();

router.get('/', index);
router.get('/ca_aut', ca_aut);
router.get('/cadastro', cadastro);
router.get('/cadastro_prof', cadastroProf);
router.get('/cursos', cursos);
router.get('/cursos2', cursos2);
router.get('/marketing-cursos', marketingCursos);
router.get('/perfil_aut', perfilAut);
router.get('/sobrenos', sobrenos);

module.exports = router;
