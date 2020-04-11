const express = require('express');
const router = express.Router();
const {
    find
} = require('./model');

// GET /api/messages (query = radius && latitude && longitude)
router.get('/', (req, res) => {
    find(req.query)
    .then(messages => {
        res.status(200).json(messages);
    })
    .catch(err => res.status(500).json({errorMessage: "Something went wrong"}))
})

module.exports = router;