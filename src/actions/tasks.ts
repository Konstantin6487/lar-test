import { taskType } from './tasksUI';

export type taskIdType = taskType;

export type TasksAction =
  | { type: 'TASKS_ADD_TASK'; payload: taskType }
  | { type: 'TASKS_REMOVE_TASK'; payload: taskIdType }
  | { type: 'TASKS_CHANGE_STATUS_TASK'; payload: taskIdType };

export const addTask = (task: taskType): TasksAction =>
  ({ type: 'TASKS_ADD_TASK', payload: task });

export const removeTask = (id: taskIdType): TasksAction =>
  ({ type: 'TASKS_REMOVE_TASK', payload: id });

export const changeTaskStatus = (id: taskIdType): TasksAction =>
  ({ type: 'TASKS_CHANGE_STATUS_TASK', payload: id });
