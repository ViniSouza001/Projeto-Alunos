const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./src/routes/routes');

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = 3000;
app.listen(PORT, (req, res) => {
    console.log('server running on port ' + PORT);
});