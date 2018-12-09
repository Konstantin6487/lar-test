import { connect } from 'react-redux';
import TasksInput from '../components/TasksInput';
import { enterTask, clearTask } from '../actions/tasksUI';
import { addTask } from '../actions/tasks';
import { IState } from '../reducers';

const mapStateToProps = (state: IState) => {
  const { tasksUI: { taskInput } } = state;
  return ({
    taskInput,
  });
};

const mapDispatchToProps = {
  enterTask,
  addTask,
  clearTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksInput);
