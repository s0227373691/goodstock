const express = require('express');
const router = express.Router();
const _ = require('lodash');

const { Boardgame } = require('../../../../modules/activeForm/free/boardgame');

router.post('/', (req, res) => {
    console.log(req.body);
    const {
        minorType,
        date,
        people,
        precautions,
        boardgameType,
        title,
        content,
    } = req.body;

    const boardgame = new Boardgame({
        minorType,
        date,
        people,
        precautions,
        boardgameType,
        title,
        content,
    });
    boardgame.save();
});

module.exports = router;
