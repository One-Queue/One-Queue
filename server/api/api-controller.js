const express = require('express');
const router = express.Router();


// Importing the api version 1
router.use('/v1', require('./v1/api-v1'));

// Exporting the router
module.exports = router;