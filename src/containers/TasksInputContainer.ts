import { connect } from 'react-redux';

import TasksInput from '../components/TasksInput';
import { enterTask, clearTask } from '../actions/tasksUI';
import { addTask } from '../actions/tasks';
import { IStore } from '../types/store';

const mapStateToProps = (state: IStore) => {
  const { tasksUI: { taskInput } } = state;
  return ({
    taskInput,
  });
};

const mapDispatchToProps = {
  addTask,
  clearTask,
  enterTaskConnect: (e: React.ChangeEvent<HTMLInputElement>) => enterTask(e.target.value),
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksInput);
