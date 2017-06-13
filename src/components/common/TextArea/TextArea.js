import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './TextArea.css';

class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };
  }

  handleOnChange = (e) => {
    this.setState({ content: e.target.value });
  };

  render() {
    const { placeholder, onBlur, onKeyPress, autoFocus, text, maxChars } = this.props;
    return (
      <div className="textArea-container">
        <textarea
          className="textArea"
          autoFocus={autoFocus}
          onBlur={onBlur}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
          defaultValue={text}
          onChange={this.handleOnChange}
          maxLength={maxChars}
        />
        {
          maxChars - this.state.content.length <= 15 &&
          <span className="count">{maxChars - this.state.content.length}</span>
        }
      </div>
    );
  }
}

TextArea.propTypes = {
  maxChars: PropTypes.number,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func
};

export default TextArea;
