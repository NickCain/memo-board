import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './Input.css';

class Input extends Component {
  render() {
    const { placeholder, onBlur, onKeyPress, autoFocus, text } = this.props;
    return (
      <input
        className="input"
        autoFocus={autoFocus}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        defaultValue={text}
      />
    );
  }
}

Input.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func
};

export default Input;
