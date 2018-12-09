import { connect } from 'react-redux';

import TasksTable from '../components/TasksTable';
import { changeTaskStatus, removeTask } from '../actions/tasks';
import { IStore } from '../types/store';
import { changeActiveTask, toggleShowModal } from '../actions/tasksUI';

const mapStateToProps = (state: IStore) => {
  const { tasks, tasksUI: { isShowCompleted, isShowModal } } = state;
  return ({
    tasks,
    isShowCompleted,
    isShowModal,
  });
};

const mapDispatchToProps = {
  removeTask,
  changeTaskStatus,
  changeActiveTask,
  toggleShowModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksTable);
