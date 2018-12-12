import { connect } from 'react-redux';

import TasksTable from '../components/TasksTable';
import { changeTaskStatus, removeTask } from '../actions/tasks';
import { IStore } from '../types/store';
import { changeActiveTask, toggleShowModal } from '../actions/tasksUI';

const mapStateToProps = (state: IStore) => {
  const { tasks, tasksUI: { isHideCompleted, isShowModal } } = state;
  return ({
    tasks,
    isHideCompleted,
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
