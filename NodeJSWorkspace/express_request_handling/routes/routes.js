const router = require('express').Router();

let arrayOfNames = ["Devin", "Shak", "Hodan", "Waseem"];

router.get('/getAll', (req, res) => res.send(arrayOfNames));

router.get('/getAll/:index', (req, res) => res.send(arrayOfNames[req.params.index]));

router.delete('/delete/:index', (req, res) => res.send(arrayOfNames.splice(req.params.index,1)));

router.post('/create', (req, res) => {
    const name = req.body.name;
    arrayOfNames.push(name);
    res.status(201).send(`${name} added.`);
});

router.post('/replace/:index', (req, res) => {
    const name = req.query.name;
    const index = req.params.index;
    const old = arrayOfNames[index];
    arrayOfNames[index] = name;
    res.status(202).send(`${old} replaced with ${name}.`);
});

module.exports = router;