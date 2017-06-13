import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Idea from '../Idea/Idea';

import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { ideasList, onUpdateIdea } = this.props;
    return (
      <div className="Board">
        {
          ideasList.map(idea => (
            <Idea
              key={idea.id}
              id={idea.id}
              createdDate={idea.created_date}
              onUpdateIdea={onUpdateIdea}
              body={idea.body || 'text'}
              title={idea.title  || 'title'}
            />
          ))
        }
      </div>
    );
  }
}

Board.propTypes = {
  onUpdateIdea: PropTypes.func,
  ideasList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      created_date: PropTypes.number
    })
  )
};

export default Board;

