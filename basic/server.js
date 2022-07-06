const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    const users = [
        {name: 'kim', age: 10},
        {name: 'lee', age: 20},
        {name: 'hong', age: 30},
    ];

    res.json({ users });
});

app.get('/write', (req, res) => {
    res.write('Hello');
    setTimeout(() => {
        res.write(' World2');
        res.end('!');
    }, 1000);
});

app.listen(3000, () => {
    console.log('express is running at port 3000');
});
