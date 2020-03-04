const express = require('express');

const app = express();

app.use(express.static('./dist/short-loop'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', { root: 'dist/short-loop/' });
});

app.listen(process.env.PORT || 8080);
