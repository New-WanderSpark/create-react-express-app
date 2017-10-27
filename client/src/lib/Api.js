import axios from 'axios';

const axiosInstance = axios.create( {
    'baseURL': 'http://localhost:3001',
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
