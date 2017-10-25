const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const logger = require( 'morgan' );
const routes = require( './routes' );
const passport = require( 'passport' );
const config = require( './config' );

// Configure Express Sever
const PORT = process.env.PORT || 3001;
const app = express();
app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( passport.initialize() );

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

// Connect mongoose to database
mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/wanderSpark_dev',
    { 'useMongoClient': true }
);

// Setup routing
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) );
}
app.use( '/', routes );

app.listen( PORT, () => {
    console.log( `🌎 ==> Server now on port ${PORT}!` );
} );
