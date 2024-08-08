import express from 'express';
import { index,
    divulgacao,
    ca_aut,
    cadastro,
    cadastroProf,
    cursos,
    cursos2,
    marketingCursos,
    perfilAut,
    sobrenos 
} from '../controllers/pageController.mjs';

const router = express.Router();

router.get('/', index);
router.get('/divulgacao', divulgacao);
router.get('/ca_aut', ca_aut);
router.get('/cadastro', cadastro);
router.get('/cadastro_prof', cadastroProf);
router.get('/cursos', cursos);
router.get('/cursos2', cursos2);
router.get('/marketing-cursos', marketingCursos);
router.get('/perfil_aut', perfilAut);
router.get('/sobrenos', sobrenos);




export default router;
