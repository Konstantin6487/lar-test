import { connect } from 'react-redux';

import TasksSwitch from '../components/TasksSwitch';
import { toggleShowCompleted } from '../actions/tasksUI';
import { IStore } from '../types/store';

const mapStateToProps = (state: IStore) => {
  const { tasks } = state;
  return ({
    tasks,
  });
};

const mapDispatchToProps = {
  toggleShowCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksSwitch);
