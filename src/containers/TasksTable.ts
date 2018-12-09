import { connect } from 'react-redux';

import TasksTable from '../components/TasksTable';
import { changeTaskStatus, removeTask } from '../actions/tasks';
import { IStore } from '../types/store';
import { changeActiveTask, toggleShowModal } from '../actions/tasksUI';

const mapStateToProps = (state: IStore) => {
  const { tasks, tasksUI: { activeTask, isShowCompleted, isShowModal } } = state;
  return ({
    tasks,
    activeTask,
    isShowCompleted,
    isShowModal,
  });
};

const mapDispatchToProps = {
  removeTask,
  changeTaskStatus,
  toggleShowModal,
  changeActiveTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksTable);
