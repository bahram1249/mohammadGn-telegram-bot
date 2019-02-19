const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const result = req.body;
});

module.exports = router;