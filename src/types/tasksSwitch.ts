import { ITasksStore } from './tasksStore';

export interface IPropsTasksSwitch {
  tasks: ITasksStore;
  toggleShowCompleted: () => void;
}
