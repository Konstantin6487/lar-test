import { taskType } from '../actions/tasksUI';

export interface ITasksUIStore {
  isShowCompleted?: boolean;
  taskInput?: taskType;
}
