const User = require( 'mongoose' ).model( 'User' );
const Trip = require( 'mongoose' ).model( 'Trip' );
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
    newUser.save( ( err, user ) => {
        if ( err ) {
            return done( err );
        }

        /**
         * If they passed a tripName, create the trip record.
         */
        if ( req.body.tripName ) {
            Trip.create( {
                'tripName': req.body.tripName,
                'ownerId': user._id
            }, ( err ) => {
                if ( err ) {
                    return done( 'Could not create trip.' );
                }

                return done();
            } );
        }

        return done( null );
    } );
} );
