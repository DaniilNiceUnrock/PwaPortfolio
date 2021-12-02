const express = require('express');
const router = express.Router();

const Skillsbodies = require('../models/Skillsbodies');

router.get('/', async (req, res) => {
    res.json(await Skillsbodies.find());
});

router.post('/', async (req, res) => {
    const skillsbodies = new Skillsbodies(req.body);
    await skillsBody.save();
    res.json({state: 'Cкилл добавлен'});
});
router.delete('/:id', async (req, res) => {
    await skillsbodies.findByIdAndRemove(req.params.id);
    res.json({state: 'Удалено'});
});

module.exports = router;