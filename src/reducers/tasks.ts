import moment from 'moment';
import 'moment/locale/ru';
import {
  isEmpty,
  omit,
  set,
} from 'lodash';

import { TasksAction } from '../actions/tasks';
import { ITasksStore } from '../types/tasksStore';

export const initState: ITasksStore = {};

export const tasks = (state = initState, action: TasksAction): ITasksStore => {
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
    case 'TASKS_UPDATE_TASK':
      return set(state, [`${action.payload.id}`, 'task'], action.payload.text);
    case 'TASKS_UPDATE_DATE':
      return set(state, [`${action.payload.id}`, 'date'], action.payload.date);
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
