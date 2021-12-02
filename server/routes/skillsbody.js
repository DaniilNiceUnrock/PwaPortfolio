const express = require('express');
const router = express.Router();

const Skills2 = require('../models/SkillsBody');

router.get('/', async (req, res) => {
    res.json(await Skills2.find());
});

router.post('/', async (req, res) => {
    const skills2 = new Skills2(req.body);
    await skills2.save();
    res.json({state: 'Cкилл добавлен'});
});
router.delete('/:id', async (req, res) => {
    await Skills2.findByIdAndRemove(req.params.id);
    res.json({state: 'Удалено'});
});

module.exports = router;