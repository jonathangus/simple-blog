const express = require('express');
const path = require('path');

const app = express();
const root = process.cwd();

app.set('views', root);
app.use(
  '/static',
  express.static(path.resolve(root, 'build'), { maxAge: '1d' })
);
app.get('*', (req, res) =>
  res.sendFile(path.resolve(root, 'build/index.html')));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Express app listening on port:', port);
});
