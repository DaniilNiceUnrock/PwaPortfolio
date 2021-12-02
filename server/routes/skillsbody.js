const express = require('express');
const router = express.Router();

const Skills2 = require('../models/SkillsBody');

router.get('/', async (req, res) => {
    res.json(await Skills2.find());
});

router.post('/', async (req, res) => {
    const skillsBody = new SkillsBody(req.body);
    await skillsBody.save();
    res.json({state: 'Cкилл добавлен'});
});
router.delete('/:id', async (req, res) => {
    await Skills2.findByIdAndRemove(req.params.id);
    res.json({state: 'Удалено'});
});

module.exports = router;