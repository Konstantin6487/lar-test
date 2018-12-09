import { ITasksStore } from '../types/tasksStore';
import { ITasksUIStore } from '../types/tasksUIStore';

export interface IStore {
  tasks: ITasksStore;
  tasksUI: ITasksUIStore;
}
