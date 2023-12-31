const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')
const mongoose = require('mongoose');

const User = mongoose.model('users');

// Encoding users
passport.serializeUser((user, done) => { done(null, user.id) });
// Deserialize user
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => { done(null, user) });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
        async (accessToken, refreshToken, profile, done) => {
            // console.log('access token', accessToken);
            // console.log("refresh token", refreshToken);
            // console.log('profile', profile);
            const existUser = await User.findOne({ googleId: profile.id })
            if (existUser) {
                // Already have a record in mongo database with that profile id
                return done(null, existUser);
            } 
                const user = await new User({ googleId: profile.id }).save()
                done(null, user);
            
        })
);
