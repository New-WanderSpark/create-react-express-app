const bodyParser = require( 'body-parser' );
const router = require( 'express' ).Router();
const usersController = require( '../controllers/usersController' );

router.use( '/*', bodyParser.json() );

/**
 * User endpoints don't need the ID as it is in the JWT and is more 
 * secure retrieving from the server side.
 */
router
    .route( '/' )
    .put( usersController.update )
    .post( usersController.create )
    .delete( usersController.remove );

module.exports = router;
