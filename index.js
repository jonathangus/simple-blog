const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const root = process.cwd();

app.set('views', root);
app.use('/static', express.static(path.resolve(root, 'build'), { maxAge: '1d' }));
app.get('*', (req, res) => res.sendFile(path.resolve(root, 'build/index.html')));

const server = http.createServer(app);
const port = process.env.PORT || 80;

server.listen(port, () => {
  console.log('Express listening on port', port);
});
