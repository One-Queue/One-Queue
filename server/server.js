/**
 * Server file
 * @author MD KASHIF RAZA
 * @copyright team Optimizers
 * @module server
 * @requires express
 * @requires path
 * @requires body-parser
 * 
 */
// Requiring and configuring dotenv
require('dotenv').config();

// Importing modules
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Setting up the port
const port = process.env.PORT || 5000;

// Setting up the static folder
app.use(express.static(path.join(__dirname, 'public')));

// Setting up the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setting up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Setting up the routes
app.use('/api', require('./api/api-controller'));

// Setting up the error handler
app.use((err, req, res, next) => {
    if (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Setting up the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



