const User = require( 'mongoose' ).model( 'User' );
const PassportLocalStrategy = require( 'passport-local' ).Strategy;

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
        'userName': userName.trim(),
        'password': password.trim(),
        'email': req.body.email.trim()
    };

    if ( req.body.firstName ) {
        userData.firstName = req.body.firstName.trim();
    }

    if ( req.body.lastName ) {
        userData.lastName = req.body.lastName.trim();
    }

    const newUser = new User( userData );
    newUser.save( ( err ) => {
        if ( err ) {
            return done( err );
        }

        return done( null );
    } );
} );
