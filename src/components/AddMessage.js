import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
    let input;

    return (
        <div className="new-message">
            <input
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        props.dispatch(input.value, 'Me');
                        input.value = '';
                    }
                }}
                type="text"
                ref={(node) => {
                    input = node
                }}
            />
        </div>
    )
};

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default AddMessage;
