// Definindo as funções para renderizar as páginas
const index = (req, res) => {
  res.render('pages/index', { pageTitle: 'home' });
};

const ca_aut = (req, res) => {
  res.render('pages/ca_aut', { pageTitle: 'cadastro autonomo' });
};

const cadastro = (req, res) => {
  res.render('pages/cadastro', { pageTitle: 'cadastro' });
};

const cadastroProf = (req, res) => {
  res.render('pages/cadastro_prof', { pageTitle: 'cadastro professor' });
};

const cursos = (req, res) => {
  res.render('pages/cursos', { pageTitle: 'cursos' });
};

const cursos2 = (req, res) => {
  res.render('pages/cursos2', { pageTitle: 'cursos 2' });
};

const marketingCursos = (req, res) => {
  res.render('pages/marketing-cursos', { pageTitle: 'marketing cursos' });
};

const perfilAut = (req, res) => {
  res.render('pages/perfil_aut', { pageTitle: 'perfil autonomo' });
};

const sobrenos = (req, res) => {
  res.render('pages/sobrenos', { pageTitle: 'sobre-nos' });
};

module.exports = {
  index,
  ca_aut,
  cadastro,
  cadastroProf,
  cursos,
  cursos2,
  marketingCursos,
  perfilAut,
  sobrenos,
};
