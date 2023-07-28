const express = require('express');


const router = express.Router;

router.get('/teste', (req, res) => res.status(200).send('olá'));

module.exports = router;