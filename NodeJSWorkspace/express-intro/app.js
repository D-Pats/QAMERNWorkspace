const express = require('express');

const app = express();

const server = app.listen(8080, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});