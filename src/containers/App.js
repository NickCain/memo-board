import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import keys from 'lodash/keys';

import * as actions from '../actions';

// Selectors
import { getIdeas, getRequestStatus, REQUEST_STATUS } from '../reducers/ideaReducer';

import './App.css';

import TopNav from '../components/TopNav/TopNav';
import Board from '../components/Board/Board';
import Notification from '../components/common/Notification/Notification';

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
    const { getIdeasList, getRequestStatus } = this.props;
    return (
      <div className="App">
        {
          getRequestStatus === REQUEST_STATUS.SUCCESS &&
            <Notification message='Successfully saved memo/idea' duration={3000} openNotification={true} />
        }
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
  ),
  getRequestStatus: PropTypes.oneOf(keys(REQUEST_STATUS))
};

const mapStateToProps = store => ({
  getIdeasList: getIdeas(store),
  getRequestStatus: getRequestStatus(store)

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
