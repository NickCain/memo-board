import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './DeleteIdeaButton.css';

class DeleteIdeaButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="DeleteIdeaButton" onClick={onClick}>
        X
      </div>
    );
  }
}

DeleteIdeaButton.propTypes = {
  onClick: PropTypes.func
};

export default DeleteIdeaButton;
