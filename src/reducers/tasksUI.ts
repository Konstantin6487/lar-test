import { taskType, TasksUIAction } from '../actions/tasksUI';

export interface ITasksUIState {
  taskInput: taskType;
  isShowCompleted: boolean;
}

const initState: ITasksUIState = {
  taskInput: '',
  isShowCompleted: false,
};

export const tasksUI = (state = initState, action: TasksUIAction): ITasksUIState => {
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
