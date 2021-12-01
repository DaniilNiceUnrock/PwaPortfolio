const express = require('express');
const router = express.Router();

const Skills2 = require('../models/Skills2');

router.get('/', async (req, res) => {
    res.json(await Skills2.find());
});

router.post('/', async (req, res) => {
    const skills2 = new Skills2(req.body);
    await skills2.save();
    res.json({state: 'скилл2 добавлен'});
});

module.exports = router;