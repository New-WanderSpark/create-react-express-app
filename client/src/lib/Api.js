import axios from 'axios';

let baseUrl = 'http://localhost:3001';

if ( process.env.NODE_ENV === 'production' ) {
    baseUrl = 'https://wanderspark.herokuapp.com';
}

const axiosInstance = axios.create( {
    'baseURL': baseUrl,
    'responseType': 'json'
} );

export const Api = {
    register ( registrationData ) {
        if ( !registrationData ) {
            throw new Error( 'No registration data passed.' );
        }

        return axiosInstance.post( '/register', registrationData );
    },

    login ( loginObj ) {
        if ( !loginObj || !loginObj.userName || !loginObj.password ) {
            throw new Error( 'Login information is incomplete.' );
        }

        return axiosInstance.post( '/login', loginObj );
    }
};
