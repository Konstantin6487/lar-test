export type taskType = string;

export type TasksUIAction =
  | { type: 'TASKUI_TEXT_ENTER'; payload: taskType }
  | { type: 'TASKUI_TEXT_CLEAR' }
  | { type: 'TASKUI_isHideCompleted_TOGGLE' }
  | { type: 'TASKUI_ISSHOWMODAL_TOGGLE' }
  | { type: 'TASKUI_CHANGE_ACTIVE_TASK', payload: taskType };

export const enterTask = (task: taskType): TasksUIAction =>
  ({ type: 'TASKUI_TEXT_ENTER', payload: task });

export const clearTask = (): TasksUIAction =>
  ({ type: 'TASKUI_TEXT_CLEAR' });

export const toggleShowCompleted = (): TasksUIAction =>
  ({ type: 'TASKUI_isHideCompleted_TOGGLE' });

export const toggleShowModal = (): TasksUIAction =>
  ({ type: 'TASKUI_ISSHOWMODAL_TOGGLE' });

export const changeActiveTask = (id: taskType): TasksUIAction =>
  ({ type: 'TASKUI_CHANGE_ACTIVE_TASK', payload: id });
