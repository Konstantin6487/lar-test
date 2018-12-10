import { taskType } from './tasksUI';

export type taskIdType = taskType;
export type dateType = string;

export type TasksAction =
  | { type: 'TASKS_ADD_TASK'; payload: taskType }
  | { type: 'TASKS_REMOVE_TASK'; payload: taskIdType }
  | { type: 'TASKS_CHANGE_STATUS_TASK'; payload: taskIdType }
  | { type: 'TASKS_UPDATE_TASK'; payload: { text: taskType, id: taskIdType } }
  | { type: 'TASKS_UPDATE_DATE'; payload: { date: taskType, id: taskIdType } };

export const addTask = (task: taskType): TasksAction =>
  ({ type: 'TASKS_ADD_TASK', payload: task });

export const removeTask = (id: taskIdType): TasksAction =>
  ({ type: 'TASKS_REMOVE_TASK', payload: id });

export const changeTaskStatus = (id: taskIdType): TasksAction =>
  ({ type: 'TASKS_CHANGE_STATUS_TASK', payload: id });

export const updateTask = (id: taskIdType, text: taskType): TasksAction =>
  ({ type: 'TASKS_UPDATE_TASK', payload: { id, text } });

export const updateDate = (id: taskIdType, date: taskType): TasksAction =>
  ({ type: 'TASKS_UPDATE_DATE', payload: { id, date } });
