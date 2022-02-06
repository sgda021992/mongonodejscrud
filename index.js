const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const config = require('./config');
const routes = require('./routes/index');
const app = express();

try {

    console.log('mongoURI.........', config.mongoURI);
    mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
        () => console.log("MongoDB Connected")
    ).catch(err =>
        console.log(err)
    );

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

    app.use('/api', routes);

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next(createError(404));
    });

    // error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'dev' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

    // Start listening to server
    const port = process.env.PORT || 5000;
    const server = app.listen(port, () => console.log('Server running on port ' + server.address().port));
} catch (err) {
    console.log(err)
}


module.exports = app;