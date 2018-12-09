import { taskType } from '../actions/tasksUI';

export interface ITasksUIStore {
  isShowCompleted?: boolean;
  isShowModal?: boolean;
  taskInput?: taskType;
  activeTask?: string;
}
