const router = require("express").Router();
const path = require("path");

// Home Page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Exercise Page
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// Stats Page
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});