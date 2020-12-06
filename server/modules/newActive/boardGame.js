const mongoose = require('mongoose');

const BoardGame = mongoose.model(
    'BoardGame',
    new mongoose.Schema({
        activeType: {
            type: String,
        },
        date: {
            type: String,
        },
        population: {
            type: Number,
        },
        Precautions: {
            type: String,
        },
        boardGameType: {
            type: String,
        },
        title: {
            type: String,
        },
        content: {
            type: String,
        },
    })
);

exports.BoardGame = BoardGame;
