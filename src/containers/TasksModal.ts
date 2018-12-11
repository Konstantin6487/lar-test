import { connect } from 'react-redux';
import { get } from 'lodash';

import TasksModal from '../components/TasksModal';
import { updateTask, updateDate } from '../actions/tasks';
import { changeActiveTask, toggleShowModal } from '../actions/tasksUI';
import { updateSandBoxTask, updateSandBoxDate, clearSandBox } from '../actions/sandbox';
import { IStore } from '../types/store';

const mapStateToProps = (state: IStore) => {
  const { sandbox: { textInput, date }, tasks, tasksUI: { activeTask, taskInput, isShowModal } } = state;
  const changingTask = get(tasks, [`${activeTask}`, 'task']);
  const changingDate = get(tasks, [`${activeTask}`, 'date']);
  return ({
    activeTask,
    date,
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
  updateSandBoxTask,
  updateSandBoxDate,
  updateTask,
  updateDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksModal);
