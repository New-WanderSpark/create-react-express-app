import React from 'react';
import PropTypes from 'prop-types';

const PlaceInfo = ( {address, phone, url} ) => {
    return (
        <div>
            <p>Address:{address}</p>
            <p>Phone:{phone}</p>
            <p>Web Site:<a target='_' href={url}>{url}</a></p>
        </div>
    );
};

PlaceInfo.propTypes = {
    'address': PropTypes.string,
    'phone': PropTypes.string,
    'url': PropTypes.string
};

export default PlaceInfo;
