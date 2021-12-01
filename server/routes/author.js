const express = require('express');
const router = express.Router();

const Author = require('../models/Author');

router.get('/', async (req, res) => {
    res.json(await Author.find());
});

router.post('/', async (req, res) => {
    const author = new Author(req.body);
    await author.save();
    res.json({state: 'Автор добавлен'});
});

module.exports = router;