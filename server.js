import  app   from "./src/app/index.mjs";

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${PORT} \http://localhost:${PORT}`);
  });
  