import { connect } from 'react-redux';

import TasksModal from '../components/TasksModal';
import { toggleShowModal, enterTask, clearTask } from '../actions/tasksUI';
import { addTask } from '../actions/tasks';
import { IStore } from '../types/store';

const mapStateToProps = (state: IStore) => {
  const { tasksUI: { activeTask, taskInput, isShowModal } } = state;
  return ({
    activeTask,
    taskInput,
    isShowModal,
  });
};

const mapDispatchToProps = {
  addTask,
  clearTask,
  toggleShowModal,
  enterTaskConnect: (e: React.ChangeEvent<HTMLInputElement>) => enterTask(e.target.value),
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksModal);
