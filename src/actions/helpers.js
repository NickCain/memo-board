export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export function action(type, payload = {}) {
  return { type, ...payload };
}

