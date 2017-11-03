const User = require( '../models/users' );
const bcrypt = require( 'bcrypt' );

// Defining methods for the tripsController
module.exports = {
    'create': function ( req, res ) {
        User
            .create( req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    'update': function ( req, res ) {
        if ( req.body.password ) {
            if ( req.body.password.length < 8 ) {
                return res.status( 422 ).json( { 'status': 422, 'error': 'Password must be at least 8 characters.' } );
            }

            /**
             * Doing this here since it's working in the model hook
             */
            let salt = bcrypt.genSaltSync();
            req.body.password = bcrypt.hashSync( req.body.password, salt );
        }

        User
            .findOneAndUpdate( { '_id': req.user._id }, req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    'remove': function ( req, res ) {
        User
            .findById( { '_id': req.user._id } )
            .then( dbModel => dbModel.remove() )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    'findOne': function ( req, res ) {
        User
            .findOne( { 'userName': req.body.userName, 'password': req.body.password } )
            .then( dbModel => {
                if ( dbModel ) return res.json( dbModel );
                return res.send( 'User name and password not found' );
            } )
            .catch( err => res.status( 422 ).json( err ) );
    }
};
