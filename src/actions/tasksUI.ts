export type taskType = string;

export type TasksUIAction =
  | { type: 'TASKUI_TEXT_ENTER'; payload: taskType }
  | { type: 'TASKUI_TEXT_CLEAR' }
  | { type: 'TASKUI_ISSHOWCOMPLETED_TOGGLE' };

export const enterTask = (task: taskType): TasksUIAction =>
  ({ type: 'TASKUI_TEXT_ENTER', payload: task });

export const toggleShowCompleted = (): TasksUIAction =>
  ({ type: 'TASKUI_ISSHOWCOMPLETED_TOGGLE' });

export const clearTask = (): TasksUIAction =>
  ({ type: 'TASKUI_TEXT_CLEAR' });
