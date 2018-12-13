import { ITasksUIStore } from './tasksUIStore';
import { IPropsTasksTable } from './tasksTable';
import { ISandBoxStore } from './sandBoxStore';

export interface IPropsTasksModal extends ITasksUIStore, IPropsTasksTable, ISandBoxStore {
  updateSandBox: (flag: string, e: string) => void;
  updateTaskText: (id: string, text: string) => void;
  updateTaskDate: (id: string, date: string) => void;
  clearSandBox: () => void;
  changingTask: string;
  changingDate: string;
}
