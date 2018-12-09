import { connect } from 'react-redux';
import { IState } from '../reducers';
import { changeTaskStatus, removeTask } from '../actions/tasks';
import TasksTable from '../components/TasksTable';

const mapStateToProps = (state: IState) => {
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
