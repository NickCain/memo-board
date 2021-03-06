import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Input from '../../components/common/Input/Input';
import TextArea from '../../components/common/TextArea/TextArea';
import DeleteIdeaButton from '../../components/DeleteIdeaButton/DeleteIdeaButton';

import './Idea.css';

class Idea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editTitle: true,
      editBody: true,
      showDelete: false
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
      created_date: createdDate,
      title: update.type === 'title' ? update.text : title,
      body: update.type === 'body' ? update.text : body,
    });
  };

  handleDeleteButton = () => {
    this.setState({
      showDelete: !this.state.showDelete
    })
  };

  handleDeleteButtonClick = () => {
    const { id, onDeleteIdea } = this.props;
    onDeleteIdea(id);
  };

  render() {
    const { title, body } = this.props;
    const { editTitle, editBody, showDelete } = this.state;
    return (
      <div className="Idea" onMouseEnter={this.handleDeleteButton} onMouseLeave={this.handleDeleteButton}>
        {
          showDelete &&
          <DeleteIdeaButton onClick={this.handleDeleteButtonClick}/>
        }
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
              maxChars={140}
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
  id: PropTypes.string,
  createdDate: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  onDeleteIdea: PropTypes.func,
  onUpdateIdea: PropTypes.func
};

export default Idea;
