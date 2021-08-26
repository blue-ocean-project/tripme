const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./routers');

const HOST = 'localhost';
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/api', router);
app.use('/hello', (req, res) => res.status(200).json('Wingardium, leviosa!\n'));

app.listen(PORT, HOST, () => console.log(`Server listening on http://${HOST}:${PORT}`))