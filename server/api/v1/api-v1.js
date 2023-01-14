const express = require('express');
const router = express.Router();


// test route
router.get('/test', (req, res) => {
    // Hostname
    const hostname = req.headers['host'];
    // Language
    const language = req.headers['accept-language'];
    // User agent
    const software = req.headers['user-agent'];
    // Environment
    const env = process.env.NODE_ENV;
    // Port
    const port = process.env.PORT;

    // Sending the response
    res.render('index', {
        host: hostname,
        language: language,
        software: software,
        env : env,
        port: port
    });
});


module.exports = router;