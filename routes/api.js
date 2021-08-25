const router = require('express').Router();
const Workout = require('../models/Workout');

// GET Route for /api/workouts
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {totalDuration: {$sum: '$exercise.duration'}}
        }
    ])
    .sort({day: -1})
    .limit(1)
    .then(dbWorkout => {
        res.status(200).json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// PUT Route for /api/workouts/:id
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true, runValidators: true})
    .then(dbWorkout => {
        res.status(200).json(dbworkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// POST Route for /api/workouts
router.post('/api/workouts', ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.status(200).json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// GET Route for /workouts/range
router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {totalDuration: {$sum: '$exercise.duration'}}
        }
    ])
    .sort({day: -1})
    .limit(7)
    .then(dbWorkout => {
        res.status(200).json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

module.exports = router;