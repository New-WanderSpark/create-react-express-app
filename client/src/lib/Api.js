import axios from 'axios';

let baseUrl = 'http://localhost:3001';

if ( process.env.NODE_ENV === 'production' ) {
    baseUrl = 'https://wander-spark.herokuapp.com/';
}

/**
 * Export main Api
 */
export const Api = {
    'axiosInstance': null,
    init () {
        /**
         * Init the axios config objext.
         */
        const axiosConfig = {
            'baseURL': baseUrl,
            'responseType': 'json',
            'headers': {}
        };

        /**
         * Check for JWT
         */
        const jwt = localStorage.getItem( 'jwt' ) || null;
        if ( jwt ) {
            axiosConfig.headers.Authorization = `jwt ${jwt}`;
        }

        /**
         * Create the axios instance with the config object.
         */
        this.axiosInstance = axios.create( axiosConfig );

        return this;
    },
    /**
     * Auth calls
     */
    register ( registrationData ) {
        if ( !registrationData ) {
            return Promise.reject( new Error( 'No registration data passed.' ) );
        }
        this.init();
        return this.axiosInstance.post( '/register', registrationData );
    },
    login ( loginObj ) {
        if ( !loginObj || !loginObj.userName || !loginObj.password ) {
            return Promise.reject( new Error( 'Login information is incomplete.' ) );
        }
        this.init();
        return this.axiosInstance.post( '/login', loginObj );
    },
    updateUser ( userObj ) {
        if ( !userObj ) {
            return Promise.reject( new Error( 'User object contains no data.' ) );
        }
        this.init();
        return this.axiosInstance.put( '/api/users', userObj );
    },

    /**
     * Trips calls
     */
    updatePlaces ( tripId, placeIds ) {
        if ( !tripId || !placeIds ) {
            return Promise.reject( new Error( 'tripId and placesId are required fields.' ) );
        }
        this.init();
        return this.axiosInstance.put( `/api/trips/${tripId}`, { placeIds } );
    },
    getTripData ( userId ) {
        if ( !userId ) {
            return Promise.reject( new Error( 'userId is a required field.' ) );
        }
        this.init();
        return this.axiosInstance.post( '/api/trips', { 'ownerId': userId } );
    },

    /**
     * Only alling update to name for now.
     * 
     * @param {string} tripName 
     */
    updateTripName ( tripId, tripName ) {
        if ( !tripName ) {
            return Promise.reject( new Error( 'tripName is a required field.' ) );
        }
        this.init();
        return this.axiosInstance.put( '/api/trips/' + tripId, tripName );
    },

    /**
     * Places calls
     */
    getDetails ( placeid ) {
        if ( !placeid ) {
            return Promise.reject( new Error( 'placeid is a required field.' ) );
        }
        this.init();
        return this.axiosInstance.post( '/api/places/details', { placeid } );
    },
    textSearch ( queryString ) {
        if ( !queryString || queryString.length < 3 ) {
            return Promise.reject( new Error( 'placeid is a required field.' ) );
        }
        this.init();
        return this.axiosInstance.get( `/api/places/search/${queryString}` );
    }
};
