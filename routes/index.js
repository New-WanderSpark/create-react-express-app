const path = require( 'path' );
const router = require( 'express' ).Router();
const places = require( './places' );
const users = require( './users' );
const trips = require( './trips' );
const auth = require( './auth' );

// API Routes
router.use( '/', auth );
router.use( '/api/users', users );
router.use( '/api/trips', trips );
/**
 * BDC - Added /api/ here so that the places API is behind an authenticated request. Without this, anyone can hit the /places routh without being authenticated first.
 */
router.use( '/api/places', places );

// If no API routes are hit, send the React app
router.use( '/*', ( req, res ) => {
    if ( process.env.NODE_ENV === 'production' ) {
        res.sendFile( path.join( __dirname, '../client/build/index.html' ) );
    } else {
        res.sendFile( path.join( __dirname, '../client/public/index.html' ) );
    }
} );

module.exports = router;
