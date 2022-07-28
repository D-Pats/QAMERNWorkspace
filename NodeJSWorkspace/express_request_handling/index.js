const express = require('express');
const app = express();
const routes = require('./routes/routes');
app.listen(8080);
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(routes);

