const express = require('express');
const cors = require('cors');
const path = require('path');

const HOST = '0.0.0.0';
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../client/public')));
app.get('/login', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, HOST, () => console.log(`Server listening on http://${HOST}:${PORT}`));
