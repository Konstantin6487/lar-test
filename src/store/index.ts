import { createStore } from 'redux';
import { reducers } from '../reducers';

export const store = createStore(
  reducers,
  // tslint:disable-next-line
  (window as any)['__REDUX_DEVTOOLS_EXTENSION__'] && (window as any)['__REDUX_DEVTOOLS_EXTENSION__']()
);
