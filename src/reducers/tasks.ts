import moment from 'moment';
import 'moment/locale/ru';

import { TasksAction } from '../actions/tasks';
import { isEmpty, omit } from 'lodash';

export interface ITasksState {
  [key: string]: {
    id: number;
    date: string;
    task: string;
    isCompleted: boolean;
  };
}

export const initState: ITasksState = {};

export const tasks = (state = initState, action: TasksAction): ITasksState => {
  switch (action.type) {
    case 'TASKS_ADD_TASK':
      const taskID = isEmpty(state) ? 1 : Math.max(...Object.keys(state).map(Number)) + 1;
      const taskDate = moment().format('L');
      return {
        ...state, [taskID]: {
          id: taskID,
          task: action.payload,
          date: taskDate,
          isCompleted: false,
        },
      };
    case 'TASKS_REMOVE_TASK':
      return omit(state, action.payload);
    case 'TASKS_CHANGE_STATUS_TASK':
      const currentTask = state[action.payload];
      return {
        ...state, [action.payload]: {
          ...currentTask,
          isCompleted: !currentTask.isCompleted,
        },
      };
    default:
      return state;
  }
};
