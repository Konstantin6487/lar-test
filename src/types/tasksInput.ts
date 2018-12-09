import { ITasksUIStore } from './tasksUIStore';
import { taskType } from '../actions/tasksUI';

export interface IPropsTasksInput extends ITasksUIStore {
  addTask: (value: taskType) => void;
  clearTask: () => void;
  enterTask: (value: taskType) => void;
}
