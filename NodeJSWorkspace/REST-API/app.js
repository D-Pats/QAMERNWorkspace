const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    const product = { title: "The Office DVD", price: 25.99 };
    const json = JSON.stringify(product);
    res.setHeader('Content-Type', 'application/json');
    res.end(json);
});

app.listen(port, () => {
    console.log(`REST API application listening at http://localhost:${port}`)
});