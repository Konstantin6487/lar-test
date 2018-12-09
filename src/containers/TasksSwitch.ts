import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import TasksSwitch from '../components/TasksSwitch';
import { toggleShowCompleted, TasksUIAction } from '../actions/tasksUI';

const mapDispatchToProps = (dispatch: Dispatch<TasksUIAction>) => ({
  toggleShowCompleted: () => dispatch(toggleShowCompleted()),
});

export default connect(null, mapDispatchToProps)(TasksSwitch);
