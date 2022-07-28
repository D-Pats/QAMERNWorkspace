const express = require('express');

const app = express();

app.listen(8080);

app.use((req, res, next) => {
    const logEntry = `host: ${req.hostname}
    ip: ${req.ip}
    method: ${req.method}
    path: ${req.path}
    time: ${new Date()}`;
    console.log(logEntry);
    next();
});

app.get('/', (req, res) =>  {
    res.send('Hello, world!');
});