import * as React from 'react';
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from 'reactstrap';

import { IPropsTasksModal } from '../types/tasksModal';

export default class TasksModal extends React.Component<IPropsTasksModal> {

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.updateSandBox('task', e.currentTarget.value);
  }

  public handleClick = () => {
    const {
      updateTaskText,
      activeTask,
      textInput,
      dateInput,
      updateTaskDate,
    } = this.props;
    if (dateInput) {
      updateTaskDate(activeTask!, dateInput);
    }
    if (textInput) {
      updateTaskText(activeTask!, textInput);
    }
    this.closedModal();
  }

  public changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.updateSandBox('date', e.currentTarget.value);
  }

  public closedModal = () => {
    const { toggleShowModal, changeActiveTask, clearSandBox } = this.props;
    toggleShowModal!();
    changeActiveTask!('');
    clearSandBox();
  }

  public render() {
    const { isShowModal, toggleShowModal, activeTask, changingTask, changingDate } = this.props;
    return (
      <Modal isOpen={isShowModal} toggle={toggleShowModal}>
        <ModalHeader toggle={toggleShowModal}>Редактирование задачи</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="exampleText">Измените задачу №{activeTask}</Label>
            <Input
              defaultValue={changingTask}
              id="exampleText"
              maxLength={140}
              name="text"
              type="textarea"
              onChange={this.handleChange}
            />
            <input defaultValue={changingDate} type="date" onChange={this.changeDate} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button onClick={this.handleClick} color="primary">Применить</Button>{' '}
          <Button color="secondary" onClick={this.closedModal}>Отмена</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
