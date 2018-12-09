import { TasksUIAction } from '../actions/tasksUI';

import { ITasksUIStore } from '../types/tasksUIStore';

const initState: ITasksUIStore = {
  isShowCompleted: false,
  taskInput: '',
};

export const tasksUI = (state = initState, action: TasksUIAction): ITasksUIStore => {
  switch (action.type) {
    case 'TASKUI_TEXT_ENTER':
      return { ...state, taskInput: action.payload };
    case 'TASKUI_TEXT_CLEAR':
      return { ...state, taskInput: '' };
    case 'TASKUI_ISSHOWCOMPLETED_TOGGLE':
      return { ...state, isShowCompleted: !state.isShowCompleted };
    default:
      return state;
  }
};
