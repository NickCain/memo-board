import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './TextArea.css';

class TextArea extends Component {
  render() {
    const { placeholder, onBlur, onKeyPress, autoFocus, text } = this.props;
    return (
      <textarea
        className="textArea"
        autoFocus={autoFocus}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        defaultValue={text}
      />
    );
  }
}

TextArea.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func
};

export default TextArea;
