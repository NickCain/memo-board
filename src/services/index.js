import { callApi } from './apiHelper';

export function getNewIdea() {
  return callApi('http://localhost:3000/api/ideas/new', 'GET');
}

export function getIdeas() {
  return callApi('http://localhost:3000/api/ideas', 'GET');
}

export function postUpdateIdea() {
  return callApi('http://localhost:3000/api/idea/update', 'GET');
}
