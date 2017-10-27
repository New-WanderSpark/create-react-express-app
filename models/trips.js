const mongoose = require( 'mongoose' );

const { Schema } = mongoose;

const tripSchema = new Schema( {
    'tripName': {
        'type': String,
        'required': true
    },
    'placeIds': {
        'type': Array,
        'maxLength': 12,
        'default': []
    },
    'createdAt': {
        'type': Date,
        'default': Date.now
    },
    'lastUpdated': {
        'type': Date,
        'default': Date.now
    },
    'ownerId': {
        'type': Schema.Types.ObjectId,
        'required': true
    }
} );

const Trip = mongoose.model( 'Trip', tripSchema );

module.exports = Trip;
