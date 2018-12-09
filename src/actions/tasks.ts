import { taskType } from './tasksUI';

export type TasksAction =
  | { type: 'TASKS_ADD_TASK'; payload: taskType };

export const addTask = (task: taskType): TasksAction =>
  ({ type: 'TASKS_ADD_TASK', payload: task });
