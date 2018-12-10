import { ITasksStore } from '../types/tasksStore';
import { ITasksUIStore } from '../types/tasksUIStore';
import { ISandBoxStore } from '../types/sandBoxStore';

export interface IStore {
  tasks: ITasksStore;
  tasksUI: ITasksUIStore;
  sandbox: ISandBoxStore;
}
