const { Active: ActiveModel } = require('../modules/active');

module.exports = {
    badminton: (req, res) => {
        const {
<<<<<<< HEAD
=======
            userName,
            activeType,
>>>>>>> js0731
            startDate,
            endDate,
            title,
            place,
            nets,
            badmintonType,
            population,
            cost,
            content,
            selectedStrengthList,
        } = req.body;

        const activeModel = new ActiveModel({
<<<<<<< HEAD
            activeType: '羽球',
=======
            userName,
            activeType,
>>>>>>> js0731
            startDate,
            endDate,
            title,
            place,
            population,
            cost,
            content,
            badmintonNets: nets,
            badmintonBrand: badmintonType,
            badmintonStrength: selectedStrengthList,
        });

        activeModel.save(function (err, result) {
            if (err) res.json({ stat: 'fail', message: err });
            else res.json({ stat: 'OK' });
        });
    },
    boardgame: (req, res) => {
        const {
<<<<<<< HEAD
=======
            userName,
            activeType,
>>>>>>> js0731
            startDate,
            endDate,
            title,
            population,
            cost,
            place,
            content,
            addedBoardGameList,
        } = req.body;
        const activeModel = new ActiveModel({
<<<<<<< HEAD
            activeType: '籃球',
=======
            userName,
            activeType,
>>>>>>> js0731
            startDate,
            endDate,
            title,
            population,
            cost,
            place,
            content,
            boardGameList: addedBoardGameList,
        });
        activeModel.save((err, result) => {
            if (err) res.json({ stat: 'fail', message: err });
            else res.json({ stat: 'OK' });
        });
    },
};
