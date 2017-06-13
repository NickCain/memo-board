import PropTypes from 'prop-types';
import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';

import './DeleteIdeaButton.css';

class DeleteIdeaButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { onClick } = this.props;
    return (
      <IconButton iconClassName="delete" onClick{onClick} />
    );
  }
}

DeleteIdeaButton.propTypes = {};

DeleteIdeaButton.defaultProps = {};

DeleteIdeaButton.contextTypes = {};

export default DeleteIdeaButton;
