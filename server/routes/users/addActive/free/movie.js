const express = require('express');
const router = express.Router();
const _ = require('lodash');

const { Movie } = require('../../../../modules/activeForm/free/movie');

router.post('/', (req, res) => {
    console.log(req.body);
    const {
        activeType,
        date,
        population,
        boardGameType,
        title,
        content,
    } = req.body;

    const movie = new Movie({
        activeType,
        date,
        population,
        boardGameType,
        title,
        content,
    });
    movie.save();
});

module.exports = router;