import { applyMiddleware, compose, createStore } from 'redux';
import { saver } from '../actions/middleware';
import { reducers } from '../reducers';
import { initState } from '../reducers/tasks';

const localStorageData = JSON.parse(localStorage.getItem('tasks')!);

const composeEnhancers =
    typeof window === 'object' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export const store = createStore(
  reducers, localStorageData || initState,
  composeEnhancers(
    applyMiddleware(saver),
));
