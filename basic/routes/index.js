const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/users', (req, res) => {
    const users = [
        {name: 'kim', age: 10},
        {name: 'lee', age: 20},
        {name: 'hong', age: 30},
    ];

    res.json({ users });
});

router.get('/write', (req, res) => {
    res.write('Hello');
    setTimeout(() => {
        res.write(' World2');
        res.end('!');
    }, 1000);
});

module.exports = router;
