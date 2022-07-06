const express = require('express');
const router = express.Router();

// user에 대한 정보를 얻는 API
router.get('/users', (req, res) => {
    const users = [
        {id: 1, name: 'kim', age: 10},
        {id: 2, name: 'lee', age: 20},
        {id: 3, name: 'hong', age: 30},
        {id: 4, name: 'park', age: 40},
    ];
    res.json({users});
});

router.get('/ping', (req, res) => {
    res.send('pong');
});

module.exports = router;
