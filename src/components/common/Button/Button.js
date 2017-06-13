import PropTypes from 'prop-types';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import FlatButton from 'material-ui/FlatButton';

import './Button.css';
class Button extends Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <FlatButton className="Button" primary onClick={onClick}>
        {text}
      </FlatButton>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

injectTapEventPlugin();

export default Button;
