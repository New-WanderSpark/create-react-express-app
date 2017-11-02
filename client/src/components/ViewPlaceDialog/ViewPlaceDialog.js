import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import PlaceData from '../../lib/PlaceData';
import { Row, Col } from 'react-materialize';
import PlaceInfo from './PlaceInfo';
import RatingStars from '../RatingStars';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class ViewPlaceDialog extends React.Component {
    render () {
        const { place } = this.props;
        const hasValidPlace = place ? Boolean( place.placeId && place.title && place.geometry ) : false;
        const actions = [
            <FlatButton
                key="closeBtn"
                label="Close"
                onClick={() => this.props.handleClose()}
            />,
            <FlatButton
                key="pinBtn"
                label="Pin"
                primary={true}
                onClick={() => this.props.handlePin( place )}
            />
        ];
        const image = <img
            src={hasValidPlace ? place.getImgUrl() : ''}
            className='img-responsive z-depth-3'
            style={{'maxHeight': '250px'}}
        />;
        const title = <h3>{hasValidPlace ? place.title : ''}</h3>;
        const info = hasValidPlace ? <PlaceInfo address={place.address} phone={place.phoneNumber} url={place.url} /> : '';
        const stars = hasValidPlace ? <RatingStars stars={place.stars} /> : '';

        return (
            <Dialog
                actions={actions}
                modal={false}
                autoScrollBodyContent={true}
                open={this.props.open}
            >
                <Row>
                    <Col s={12} className='center-align'>{image}</Col>
                </Row>
                <Row>
                    <Col s={12} className='center-align'>
                        {title}
                    </Col>
                </Row>
                <Row>
                    <Col s={12} className='center-align'>
                        {stars}
                    </Col>
                </Row>
                <Row>
                    <Col s={12} className='center-align'>
                        {info}
                    </Col>
                </Row>
            </Dialog>
        );
    }
}

ViewPlaceDialog.propTypes = {
    'handleClose': PropTypes.func,
    'handlePin': PropTypes.func,
    'open': PropTypes.bool,
    'place': PropTypes.instanceOf( PlaceData )
};

export default ViewPlaceDialog;
