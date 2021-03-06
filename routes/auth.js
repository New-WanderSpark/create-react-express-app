const express = require( 'express' );
const passport = require( 'passport' );
const User = require( '../models/users' );

const router = new express.Router();

/**
 * Lookup userId
 * 
 * @param {string} userName
 * @returns {Promise} Promise object represents the user id string
 */
function getUserId ( userName ) {
    return User
        .findOne( { userName } )
        .then( dbModel => {
            if ( dbModel ) return dbModel.id;
        } );
}

/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 * errors tips, and a global message for the whole form.
 */
function validateSignupForm ( payload ) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if ( !payload || typeof payload.userName !== 'string' ) {
        isFormValid = false;
        errors.userName = 'Please provide a username.';
    }

    if ( !payload || typeof payload.password !== 'string' || payload.password.trim().length < 8 ) {
        isFormValid = false;
        errors.password = 'Password must have at least 8 characters.';
    }

    if ( !isFormValid ) {
        message = 'Check the form for errors.';
    }

    return {
        'success': isFormValid,
        message,
        errors
    };
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 * errors tips, and a global message for the whole form.
 */
function validateLoginForm ( payload ) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if ( !payload || typeof payload.userName !== 'string' ) {
        isFormValid = false;
        errors.userName = 'Please provide a username.';
    }

    if ( !payload || typeof payload.password !== 'string' || payload.password.trim().length === 0 ) {
        isFormValid = false;
        errors.password = 'Please provide your password.';
    }

    if ( !isFormValid ) {
        message = 'Check the form for errors.';
    }

    return {
        'success': isFormValid,
        message,
        errors
    };
}

router.post( '/register', ( req, res, next ) => {
    const validationResult = validateSignupForm( req.body );
    if ( !validationResult.success ) {
        return res.status( 400 ).json( {
            'success': false,
            'message': validationResult.message,
            'errors': validationResult.errors
        } );
    }

    return passport.authenticate( 'local-signup', ( err ) => {
        if ( err ) {
            if ( err.name === 'MongoError' && err.code === 11000 ) {
                /*
                * the 11000 Mongo code is for a duplication email error
                * the 409 HTTP status code is for conflict error
                */
                return res.status( 409 ).json( {
                    'success': false,
                    'message': 'Check the form for errors.',
                    'error': 'This username or email is already taken.'
                } );
            }

            return res.status( 400 ).json( {
                'success': false,
                'message': 'Could not process the form. ' + err
            } );
        }

        return res.status( 200 ).json( {
            'success': true,
            'message': 'You have successfully signed up! Now you should be able to log in.'
        } );
    } )( req, res, next );
} );

router.post( '/login', ( req, res, next ) => {
    const validationResult = validateLoginForm( req.body );
    if ( !validationResult.success ) {
        return res.status( 400 ).json( {
            'success': false,
            'message': validationResult.message,
            'errors': validationResult.errors
        } );
    }

    return passport.authenticate( 'local-login', ( err, token, userData ) => {
        if ( err ) {
            if ( err.name === 'IncorrectCredentialsError' ) {
                return res.status( 400 ).json( {
                    'success': false,
                    'message': err.message
                } );
            }

            return res.status( 400 ).json( {
                'success': false,
                'message': 'Could not process the form.'
            } );
        }

        // add user id to userData and send response
        getUserId( userData.userName )
            .then( userId => {
                userData.userId = userId;
                return res.json( {
                    'success': true,
                    'message': 'You have successfully logged in!',
                    token,
                    'user': userData
                } );
            } )
            .catch( err => {
                return res.status( 400 ).json( {
                    'success': false,
                    'message': err.message
                } );
            } );
    } )( req, res, next );
} );

module.exports = router;
