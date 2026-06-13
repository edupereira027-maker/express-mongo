import http from 'http';

const PORT = 3000;

const rotas = {
  "/": 'Bem-vindo a pagina inicial! do Curso de API com Node.js - Express e MongoDB',
  "/livros": 'Aqui estao os livros disponiveis.',
  "/autores": 'Aqui estao os autores disponiveis.',
  };

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(rotas[req.url] || 'Rota não encontrada');
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});