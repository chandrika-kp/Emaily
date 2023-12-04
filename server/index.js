const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
// const cookieSession = require('cookie-session');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./Models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI)
const app = express();
app.use(bodyParser.json());
// app.use(cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey]
// }));

app.use(
    expressSession({
        secret: keys.cookieKey,
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 30 * 24 * 60 * 60 * 1000,
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());


// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);  
// or
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);