const express = require('express');
const app = express();
app.listen(4000);

app.get('/getError', (req, res, next) => {
    next(Error('Message'));
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

// app.get('/error', (req, res, next) => {
//     const err = new Error('Useful error message');
//     next(err);
// });

// const errorLogger = (err, req, res, next) => {
//     console.log(err.stack);
//     next(err);
// }
// app.use(errorLogger);

// const sendError = (err, req, res) => {
//     res.status(500).send(err.message);
// }
// app.use(sendError);