const express = require('express');
const router = express.Router();
const users = require('../data/users');

// user에 대한 정보를 얻는 API
router.get('/users', (req, res) => {
    const { age } = req.query;
    if (!age) {
        return res.json({users});
    }

    // 리스트에서 조건에 해당하는 요소만 골라서 다시 리스트로 생성하여 반환
    const filteredUsers = users.filter((user) => {
        return user.age === parseInt(age);
    });
    res.json({ users: filteredUsers });
});

router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => {
        return user.id === parseInt(id);
    })

    if (!user) {
        return res.status(400).json({
            msg: 'user is not found'
        });
    }

    res.json({ user });
})

router.get('/ping', (req, res) => {
    res.send('pong');
});

module.exports = router;
