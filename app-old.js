const http = require('http');

// req, los que solictan del url, o dicho de otro modo las peticiones que hacen
// res, lo que mi servidore le va responder al cliente 
http.createServer((req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
  // res.writeHead(200, { 'Content-Type': 'text/csv' });

  res.write('Hola Mundo');
  res.end();


})
  .listen(3001);

console.log("Escuchando en el puerto");

