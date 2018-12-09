import { connect } from 'react-redux';
import { IState } from '../reducers';
import TasksSwitch from '../components/TasksSwitch';
import { toggleShowCompleted } from '../actions/tasksUI';

const mapStateToProps = (state: IState) => {
  const { tasks } = state;
  return ({
    tasks,
  });
};

const mapDispatchToProps = {
  toggleShowCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksSwitch);
