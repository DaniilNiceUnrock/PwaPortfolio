const express = require('express');
const router = express.Router();

const SkillsBody = require('../models/Skillsbodies');

router.get('/', async (req, res) => {
    res.json(await SkillsBody.find());
});

router.post('/', async (req, res) => {
    const skillsBody = new SkillsBody(req.body);
    await skillsBody.save();
    res.json({state: 'Cкилл добавлен'});
});
router.delete('/:id', async (req, res) => {
    await SkillsBody.findByIdAndRemove(req.params.id);
    res.json({state: 'Удалено'});
});

module.exports = router;