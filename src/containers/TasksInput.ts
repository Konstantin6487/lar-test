import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import TasksInput from '../components/TasksInput';
import { taskType, enterTask, clearTask, TasksUIAction } from '../actions/tasksUI';
import { addTask, TasksAction } from '../actions/tasks';
import { IState } from '../reducers';

const mapStateToProps = (state: IState) => {
  const { tasksUI: { taskInput } } = state;
  return ({
    taskInput,
  });
};

const mapDispatchToProps = (dispatch: Dispatch<TasksUIAction | TasksAction>) => ({
  enterTask: (task: taskType) => dispatch(enterTask(task)),
  addTask: (task: taskType) => dispatch(addTask(task)),
  clearTask: () => dispatch(clearTask()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksInput);
