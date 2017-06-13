import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

// Selectors
import { getIdeas } from '../reducers/ideaReducer';

import './App.css';

import TopNav from '../components/TopNav/TopNav';
import Board from '../components/Board/Board';

class App extends Component {

  handleOnBtnClick = () => {
    this.props.getNewIdea();
  };

  componentDidMount() {
    this.props.getIdeas();
  }

  handleUpdateIdea = (idea) => {
    this.props.updateIdea(idea);
  };

  handleDeleteIdea = (data) => {
    this.props.deleteIdea(data);
  };

  render() {
    const { getIdeasList } = this.props;
    console.log(getIdeasList);
    return (
      <div className="App">
        <TopNav btnText="Add Memo/Idea" onBtnClick={this.handleOnBtnClick}/>
        <Board ideasList={getIdeasList} onDeleteIdea={this.handleDeleteIdea} onUpdateIdea={this.handleUpdateIdea}/>
      </div>
    );
  }
}

App.propTypes = {
  createNewIdea: PropTypes.func,
  onDeleteIdea: PropTypes.func,
  getIdeas: PropTypes.func,
  getNewIdea: PropTypes.func,
  deleteIdea: PropTypes.func,
  updateIdea: PropTypes.func,
  getIdeasList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      created_date: PropTypes.number
    })
  )
};

const mapStateToProps = store => ({
  getIdeasList: getIdeas(store)
});

const mapDispatchToProps = dispatch => ({
  getIdeas: () => {
    dispatch(actions.getIdeas.request());
  },
  getNewIdea: () => {
    dispatch(actions.newIdea.request());
  },
  updateIdea: (data) => {
    dispatch(actions.updateIdea.request(data));
  },
  deleteIdea: (data) => {
    dispatch(actions.deleteIdea.request(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
