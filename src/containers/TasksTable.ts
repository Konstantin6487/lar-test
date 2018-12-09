import { connect } from 'react-redux';

import TasksTable from '../components/TasksTable';
import { changeTaskStatus, removeTask } from '../actions/tasks';
import { IStore } from '../types/store';

const mapStateToProps = (state: IStore) => {
  const { tasks, tasksUI: { isShowCompleted } } = state;
  return ({
    tasks,
    isShowCompleted,
  });
};

const mapDispatchToProps = {
  removeTask,
  changeTaskStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksTable);
