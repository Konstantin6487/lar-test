import { connect } from 'react-redux';
import { get } from 'lodash';

import TasksModal from '../components/TasksModal';
import { updateTaskText, updateTaskDate } from '../actions/tasks';
import { changeActiveTask, toggleShowModal } from '../actions/tasksUI';
import { updateSandBox, clearSandBox } from '../actions/sandbox';
import { IStore } from '../types/store';

const mapStateToProps = (state: IStore) => {
  const { sandbox: { textInput, dateInput }, tasks, tasksUI: { activeTask, taskInput, isShowModal } } = state;
  const changingTask = get(tasks, [`${activeTask}`, 'task']);
  const changingDate = get(tasks, [`${activeTask}`, 'date']);
  return ({
    activeTask,
    dateInput,
    textInput,
    taskInput,
    isShowModal,
    changingTask,
    changingDate,
  });
};

const mapDispatchToProps = {
  changeActiveTask,
  clearSandBox,
  toggleShowModal,
  updateSandBox,
  updateTaskText,
  updateTaskDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksModal);
