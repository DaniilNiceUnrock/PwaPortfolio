const express = require('express');
const router = express.Router();

const rewiews = require('../models/Rewiews');

router.get('/', async (req, res) => {
    res.json(await rewiews.find());
});

router.post('/', async (req, res) => {
    const rewiews = new Rewiews(req.body);
    await rewiews.save();
    res.json({state: 'success'});
});

router.get('/:id', async (req, res) => {
    res.json(await rewiews.findById(req.params.id));
});

router.put('/:id', async (req, res) => {
    await rewiews.findByIdAndUpdate(req.params.id, req.body);
    res.json({state: 'updated'});
});

router.delete('/:id', async (req, res) => {
    await rewiews.findByIdAndRemove(req.params.id);
    res.json({state: 'deleted'});
});

module.exports = router;