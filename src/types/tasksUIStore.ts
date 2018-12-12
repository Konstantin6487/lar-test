import { taskType } from '../actions/tasksUI';

export interface ITasksUIStore {
  isHideCompleted?: boolean;
  isShowModal?: boolean;
  taskInput?: taskType;
  activeTask?: string;
}
