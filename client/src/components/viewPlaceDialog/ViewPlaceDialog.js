import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class ViewPlaceDialog extends React.Component {

    render () {
        const actions = [
            <FlatButton
                label="Close"
                onClick={() => this.props.handleClose()}
            />,
            <FlatButton
                label="Pin"
                primary={true}
                onClick={() => this.props.handlePin( this.props.place )}
            />
        ];

        return (
            <Dialog
                title={this.props.place.title || ''}
                actions={actions}
                modal={false}
                open={this.props.open}
            >
                {this.props.place ? <pre>{JSON.stringify( this.props.place, null, 2 )}</pre> : 'No Place Selected'}
            </Dialog>

        );
    }
}
