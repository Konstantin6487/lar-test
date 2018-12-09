import { combineReducers } from 'redux';

import { tasks } from './tasks';
import { tasksUI } from './tasksUI';
import { IStore } from '../types/store';

export const reducers = combineReducers<IStore>({
  tasks,
  tasksUI,
});
