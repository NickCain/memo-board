import { REQUEST, SUCCESS, FAILURE, action } from './helpers';

// ALL IDEAS

const IDEAS_BASE = 'IDEAS_';
export const IDEAS = {
  REQUEST: IDEAS_BASE + REQUEST,
  SUCCESS: IDEAS_BASE + SUCCESS,
  FAILURE: IDEAS_BASE + FAILURE
};

export const getIdeas = {
  request: () => action(IDEAS.REQUEST),
  success: (response, params) => action(IDEAS.SUCCESS, { response, params}),
  failure: (error, params) => action(IDEAS.FAILURE, { error, params })
};

// NEW IDEA

const NEW_IDEA_BASE = 'NEW_IDEA_';
export const NEW_IDEA = {
  REQUEST: NEW_IDEA_BASE + REQUEST,
  SUCCESS: NEW_IDEA_BASE + SUCCESS,
  FAILURE: NEW_IDEA_BASE + FAILURE
};

export const newIdea = {
  request: () => action(NEW_IDEA.REQUEST),
  success: (response, params) => action(NEW_IDEA.SUCCESS, { response, params}),
  failure: (error, params) => action(NEW_IDEA.FAILURE, { error, params })
};

// UPDATE IDEA

const UPDATE_IDEA_BASE = 'UPDATE_IDEA_';
export const UPDATE_IDEA = {
  REQUEST: UPDATE_IDEA_BASE + REQUEST,
  SUCCESS: UPDATE_IDEA_BASE + SUCCESS,
  FAILURE: UPDATE_IDEA_BASE + FAILURE
};

export const updateIdea = {
  request: data => action(UPDATE_IDEA.REQUEST, { data }),
  success: (requestData, response) => action(UPDATE_IDEA.SUCCESS, { requestData, response }),
  failure: error => action(UPDATE_IDEA.FAILURE, { error })
};

// DELETE IDEA

const DELETE_IDEA_BASE = 'DELETE_IDEA_';
export const DELETE_IDEA = {
  REQUEST: DELETE_IDEA_BASE + REQUEST,
  SUCCESS: DELETE_IDEA_BASE + SUCCESS,
  FAILURE: DELETE_IDEA_BASE + FAILURE
};

export const deleteIdea = {
  request: data => action(DELETE_IDEA.REQUEST, { data }),
  success: (requestData, response) => action(DELETE_IDEA.SUCCESS, { requestData, response }),
  failure: error => action(DELETE_IDEA.FAILURE, { error })
};
