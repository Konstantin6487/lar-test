import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

import moment from 'moment';
import 'moment/locale/ru';

import { tasksUI, initState as initStateTasksUI } from '../reducers/tasksUI';
import { TasksUIAction } from '../actions/tasksUI';

import { tasks, initState as initStateTasks } from '../reducers/tasks';
import { TasksAction } from '../actions/tasks';

describe('App component', () => {
  it('Should render without error', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });
});

describe('taskUI reducer', () => {

  it('TASKUI_TEXT_ENTER', () => {
    const action: TasksUIAction = {
      type: 'TASKUI_TEXT_ENTER',
      payload: 'new task',
    };

    expect(tasksUI(initStateTasksUI, action)).toEqual({
      ...initStateTasksUI,
      taskInput: action.payload,
    });
  });

});

describe('tasks reducer', () => {

  it('TASKS_ADD_TASK', () => {
    const action: TasksAction = {
      type: 'TASKS_ADD_TASK',
      payload: 'new task',
    };

    expect(tasks(initStateTasks, action)).toEqual({
      ...initStateTasks,
      1: {
        id: 1,
        task: action.payload,
        isCompleted: false,
        date: moment().format('L'),
      },
    });
  });

});
