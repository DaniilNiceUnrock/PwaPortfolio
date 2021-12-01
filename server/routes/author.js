const express = require('express');
const router = express.Router();

const Author = require('../models/Author');

router.get('/', async (req, res) => {
    res.json(await Author.find());
});

router.post('/', async (req, res) => {
    const Author = new Author(req.body);
    await Author.save();
    res.json({state: 'Автор добавлен'});
});


module.exports = router;