import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import PlaceData from '../../lib/PlaceData';
import { Row, Col } from 'react-materialize';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class ViewPlaceDialog extends React.Component {
    render () {
        console.log( this.props.place );
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
                onClick={() => this.props.handlePin( this.props.place )}
            />
        ];
        const hasValidPlace = Boolean( this.props.place );
        const image = <img 
            src={hasValidPlace ? this.props.place.getImgUrl() : ''}
            className='img-responsive z-depth-3'
            style={{'maxHeight': '250px'}}
        />;
        const imageStyles = {
            'width': '100%',
            'maxHeight': '50%'
        };

        return (
            <Dialog
                actions={actions}
                modal={false}
                open={this.props.open}
            >
                <Row><Col s={12} className='center-align white'>{image}</Col></Row>
                
                {/* hasValidPlace ? <pre>{JSON.stringify( this.props.place, null, 2 )}</pre> : 'No Place Selected' */}
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
