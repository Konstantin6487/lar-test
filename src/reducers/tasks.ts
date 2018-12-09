import { TasksAction } from '../actions/tasks';
import { isEmpty } from 'lodash';

export interface ITasksState {
  [key: string]: {
    id: number;
    // date: string;
    task: string;
    // isCompleted: boolean;
  };
}

const initState: ITasksState = {};

export const tasks = (state = initState, action: TasksAction): ITasksState => {
  switch (action.type) {
    case 'TASKS_ADD_TASK':
      const taskID = isEmpty(state) ? 1 : Math.max(...Object.keys(state).map(Number)) + 1;
      return { ...state, [taskID]: { id: taskID, task: action.payload } };
    default:
      return state;
  }
};
