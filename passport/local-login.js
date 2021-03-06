const jwt = require( 'jsonwebtoken' );
const User = require( 'mongoose' ).model( 'User' );
const PassportLocalStrategy = require( 'passport-local' ).Strategy;
const config = require( '../config' );

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy( {
    'usernameField': 'userName',
    'passwordField': 'password',
    'session': false,
    'passReqToCallback': true
}, ( req, userName, password, done ) => {
    const userData = {
        'userName': req.body.userName.trim(),
        'password': req.body.password.trim()
    };

    /*
    * find a user by username
    */ 

    return User.findOne( { 'userName': userData.userName }, ( err, user ) => {
        if ( err ) { return done( err ); }

        if ( !user ) {
            const error = new Error( 'Incorrect email or password' );
            error.name = 'IncorrectCredentialsError';

            return done( error );
        }

        /*
        * check if a hashed user's password is equal to a value saved in the database
        */ 
        return user.comparePassword( userData.password, ( passwordErr, isMatch ) => {
            if ( err ) { return done( err ); }

            if ( !isMatch ) {
                const error = new Error( 'Incorrect email or password' );
                error.name = 'IncorrectCredentialsError';

                return done( error );
            }

            const payload = {
                'sub': user._id
            };

            /*
            * create a token string
            */ 
            const token = jwt.sign( payload, config.jwtSecret );
            const data = {
                'name': user.name,
                'email': user.email,
                'userName': user.userName
            };

            return done( null, token, data );
        } );
    } );
} );
