import { combineReducers } from 'redux';
import { tasks, ITasksState } from './tasks';
import { tasksUI, ITasksUIState } from './tasksUI';

export interface IState {
  tasks: ITasksState;
  tasksUI: ITasksUIState;
}

export const reducers = combineReducers<IState>({
  tasks,
  tasksUI,
});
