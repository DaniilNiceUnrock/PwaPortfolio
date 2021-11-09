const express = require('express');
const router = express.Router();

const Skills = require('../models/Skills');

router.get('/', async (req, res) => {
    res.json(await Skills.find());
});

router.post('/', async (req, res) => {
    const skills = new Skills(req.body);
    await skills.save();
    res.json({state: 'success skills'});
});

router.get('/:id', async (req, res) => {
    res.json(await Skills.findById(req.params.id));
});

router.put('/:id', async (req, res) => {
    await Skills.findByIdAndUpdate(req.params.id, req.body);
    res.json({state: 'updated'});
});

router.delete('/:id', async (req, res) => {
    await Skills.findByIdAndRemove(req.params.id);
    res.json({state: 'deleted'});
});

module.exports = router;