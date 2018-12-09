import { ITasksUIStore } from './tasksUIStore';
import { ITasksStore } from './tasksStore';
import { taskIdType } from '../actions/tasks';

export interface IPropsTasksTable extends ITasksUIStore {
  changeTaskStatus: (id: taskIdType) => void;
  removeTask: (id: taskIdType) => void;
  toggleShowModal: () => void;
  changeActiveTask: (id: string) => void;
  tasks: ITasksStore;
}
