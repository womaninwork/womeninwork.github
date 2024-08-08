
export const index = (req, res) => {
    res.render('pages/index', { pageTitle: 'home' });
  };
  
  
export const divulgacao = (req, res) => {
  res.render('pages/divulgacao', { pageTitle: 'divulgação' });
};

export const ca_aut = (req, res) => {
  res.render('pages/ca_aut', { pageTitle: 'cadastro autonomo' });
};

export const cadastro = (req, res) => {
  res.render('pages/cadastro', { pageTitle: 'cadastro' });
};


export const cadastroProf = (req, res) => {
  res.render('pages/cadastro_prof', { pageTitle: 'cadastro professor' });
};


export const cursos = (req, res) => {
  res.render('pages/cursos', { pageTitle: 'cursos' });
};


export const cursos2 = (req, res) => {
  res.render('pages/cursos2', { pageTitle: 'cursos 2' });
};

export const marketingCursos = (req, res) => {
  res.render('pages/marketing-cursos', { pageTitle: 'marketing cursos' });
};


export const perfilAut = (req, res) => {
  res.render('pages/perfil_aut', { pageTitle: 'perfil autonomo' });
};

export const sobrenos = (req, res) => {
  res.render('pages/sobrenos', { pageTitle: 'sobre-nos' });
};