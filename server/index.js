require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const cookies = require('cookie-parser');
const path = require('path');
const router = require('./routers');

const HOST = 'localhost';
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookies());
app.use('/', express.static(path.join(__dirname, '../client/public')));
app.use('/', router);

app.listen(PORT, HOST, () => console.log(`Server listening on http://${HOST}:${PORT}`));
