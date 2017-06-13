import update from 'immutability-helper';
import get from 'lodash/get';

import * as actions from '../actions';

export const REQUEST_STATUS = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

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
        ...state,
        status: REQUEST_STATUS.PENDING
      };

    case actions.UPDATE_IDEA.SUCCESS: {
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
        ideasList: newIdeasList,
        status: REQUEST_STATUS.SUCCESS
      };
    }

    case actions.UPDATE_IDEA.FAILURE:
      return {
        ...state,
        error: action.error,
        status: REQUEST_STATUS.FAILURE
      };

    case actions.DELETE_IDEA.REQUEST:
      return {
        ...state
      };

    case actions.DELETE_IDEA.SUCCESS: {
      return {
        ...state,
        ideasList: state.ideasList.filter(item => item.id !== action.response)
      };
    }

    case actions.DELETE_IDEA.FAILURE:
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
export const getRequestStatus = state => get(state, [IDEAS_STATE_KEY, 'status']);

export default ideaReducer;
