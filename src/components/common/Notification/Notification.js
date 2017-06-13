import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Snackbar from 'material-ui/Snackbar';

import './Notification.css';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    const { openNotification, message, duration } = this.props;
    return (
      <div className="Notification">
        <Snackbar
          open={openNotification}
          message={message}
          autoHideDuration={duration}
        />
      </div>
    );
  }
}

Notification.propTypes = {
  openNotification: PropTypes.bool,
  message: PropTypes.string,
  duration: PropTypes.number,

};

export default Notification;
