import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Input from '../../components/common/Input/Input';
import TextArea from '../../components/common/TextArea/TextArea';

import './Idea.css';

class Idea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editTitle: true,
      editBody: false
    };
  }

  handleTitleFocus = () => {
    this.setState({
      editTitle: true
    })
  };

  handleTitleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        editTitle: false
      });
      this.handleUpdateIdea({ type: 'title', text: e.target.value });
    }
  };

  handleTitleInputOnBlur = (e) => {
    this.setState({
      editTitle: false
    });

    this.handleUpdateIdea({ type: 'title', text: e.target.value });
  };

  handleBodyFocus = () => {
    this.setState({
      editBody: true
    })
  };


  handleBodyInputOnBlur = (e) => {
    this.setState({
      editBody: false
    });

    this.handleUpdateIdea({ type: 'body', text: e.target.value });
  };

  handleBodyInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        editBody: false
      });
      this.handleUpdateIdea({ type: 'body', text: e.target.value });
    }
  };

  handleUpdateIdea = (update) => {
    const { id, createdDate, title, body } = this.props;

    this.props.onUpdateIdea({
      id,
      createdDate,
      title: update.type === 'title' ? update.text : title,
      body: update.type === 'body' ? update.text : body,
    });
  };

  render() {
    const { title, body } = this.props;
    const { editTitle, editBody } = this.state;
    return (
      <div className="Idea">
        {
          editTitle ?
            <Input
              autoFocus
              onBlur={this.handleTitleInputOnBlur}
              onKeyPress={this.handleTitleInputKeyPress}
              placeholder="Type title..."
              text={title}
            />
            :
            <p className="title" onClick={this.handleTitleFocus}>
              {title}
            </p>

        }
        {
          editBody ?
            <TextArea
              autoFocus
              placeholder="type body..."
              onKeyPress={this.handleBodyInputKeyPress}
              onBlur={this.handleBodyInputOnBlur}
              text={body}
            />
            :
            <div
              className="body"
              onClick={this.handleBodyFocus}
            >
              <p className="body-content">
                {body}
              </p>
            </div>
        }
      </div>
    );
  }
}

Idea.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default Idea;
