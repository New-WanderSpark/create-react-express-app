const mongoose = require( 'mongoose' );
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema( {
    'userName': {
        'type': String,
        'required': true,
        'unique': true
    },
    'token': {
        'type': String
    },
    'password': {
        'type': String,
        'required': true,
        'minlength': 8
    },
    'email': {
        'type': String,
        // TODO compare against a regext for email validation
        'required': true,
        'unique': true
    },
    'firstName': String,
    'lastName': String,
    'createdAt': {
    // TODO prevent created at from being changed after account is first created
        'type': Date,
        'default': Date.now
    },
    'lastLogin': {
        'type': Date,
        'default': Date.now
    },
    'photos': {
        'type': Schema.Types.Mixed,
        'default': {}
    }
} );

/**
* Compare the passed password with the value in the database. A model method.
*
* @param {string} password
* @returns {object} callback
*/
userSchema.methods.comparePassword = function comparePassword ( password, callback ) {
    bcrypt.compare( password, this.password, callback );
};
    
/**
* The pre-save hook method.
*/
userSchema.pre( 'save', function saveHook ( next ) {
    const user = this;

    // proceed further only if the password is modified or the user is new
    if ( !user.isModified( 'password' ) ) return next();

    return bcrypt.genSalt( ( saltError, salt ) => {
        if ( saltError ) { return next( saltError ); }
        
        return bcrypt.hash( user.password, salt, ( hashError, hash ) => {
            if ( hashError ) { return next( hashError ); }
            
            // replace a password string with hash value
            user.password = hash;
            
            return next();
        } );
    } );
} );

const User = mongoose.model( 'User', userSchema );

module.exports = User;
