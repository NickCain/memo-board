import update from 'immutability-helper';
import get from 'lodash/get';

import * as actions from '../actions';

const initialState = {
  ideasList: []
};

const ideaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.IDEAS.REQUEST:
      return {
        ...state
      };

    case actions.IDEAS.SUCCESS:
      return {
        ...state,
        ideasList: [...state.ideasList, action.response]
      };

    case actions.IDEAS.FAILURE:
      return {
        ...state,
        error: action.error
      };

    case actions.NEW_IDEA.REQUEST:
      return {
        ...state
      };

    case actions.NEW_IDEA.SUCCESS:
      return {
        ...state,
        ideasList: [...state.ideasList, action.response]
      };

    case actions.NEW_IDEA.FAILURE:
      return {
        ...state,
        error: action.error
      };

    case actions.UPDATE_IDEA.REQUEST:
      return {
        ...state
      };

    case actions.UPDATE_IDEA.SUCCESS:
      const { id, body, title } = action.response;
      const ideasList = [...state.ideasList];

      const newIdeasList = ideasList.map(idea => {
        if (idea.id === id) {
          return update(idea, { $merge: { body, title } });
        }
        return idea;
      });

      return {
        ...state,
        ideasList: newIdeasList
      };

    case actions.UPDATE_IDEA.FAILURE:
      return {
        ...state,
        error: action.error
      };


    default:
      return state;
  }
};

export const IDEAS_STATE_KEY = 'ideasState';

// Selectors
export const getIdeas = state => get(state, [IDEAS_STATE_KEY, 'ideasList']);

export default ideaReducer;