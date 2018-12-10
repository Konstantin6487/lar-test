import { TasksUIAction } from '../actions/tasksUI';

import { ITasksUIStore } from '../types/tasksUIStore';

const initState: ITasksUIStore = {
  activeTask: '',
  isShowCompleted: false,
  isShowModal: false,
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
    case 'TASKUI_ISSHOWMODAL_TOGGLE':
      return { ...state, isShowModal: !state.isShowModal };
    case 'TASKUI_CHANGE_ACTIVE_TASK':
      return { ...state, activeTask: action.payload };
    default:
      return state;
  }
};
