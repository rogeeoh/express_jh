const express = require('express');
const router = express.Router();

// DB 연동
router.get('/users', (req, res) => {
    res.json({
        result: 'GET all users'
    });
});

router.get('/users/:id', (req, res) => {
    res.json({
        result: `GET user information ${req.params.id}`
    });
});

router.post('/users', (req, res) => {
    res.json({
        result: 'POST create user'
    });
});

router.put('/users/:id', (req, res) => {
    res.json({
        result: `PUT user information ${req.params.id}`
    });
});

router.delete('/users/:id', (req, res) => {
    res.json({
        result: `DELETE user information ${req.params.id}`
    });
});


module.exports = router;
