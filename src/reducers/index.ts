import { combineReducers } from 'redux';

import { tasks } from './tasks';
import { tasksUI } from './tasksUI';
import { sandbox } from './sandbox';
import { IStore } from '../types/store';

export const reducers = combineReducers<IStore>({
  sandbox,
  tasks,
  tasksUI,
});
