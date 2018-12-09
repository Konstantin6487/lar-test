import { Middleware } from 'redux';

export const saver: Middleware = store => next => (action) => {
  const result = next(action);
  const { tasks } = store.getState();
  localStorage.setItem('tasks', JSON.stringify({ tasks }));
  return result;
};
