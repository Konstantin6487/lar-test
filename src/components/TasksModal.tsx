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

export default class TasksModal extends React.Component<any> {

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value } } = e;
    this.props.updateSandBoxTask(value);
  }

  public handleClick = () => {
    const {
      updateTask,
      activeTask,
      textInput,
      date,
      updateDate,
    } = this.props;
    if (date) {
      updateDate(activeTask, date);
    }
    if (textInput) {
      updateTask(activeTask, textInput);
    }
    this.closedModal();
  }

  public changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value } } = e;
    this.props.updateSandBoxDate(value);
  }

  public closedModal = () => {
    this.props.toggleShowModal();
    this.props.changeActiveTask('');
    this.props.clearSandBox();
  }

  public render() {

    const {
      isShowModal,
      toggleShowModal,
      activeTask,
      changingTask,
    } = this.props;
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
            <input
              defaultValue={this.props.changingDate}
              type="date"
              onChange={this.changeDate}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={this.handleClick}
            color="primary"
          >Применить
          </Button>{' '}
          <Button color="secondary" onClick={this.closedModal}>Отмена</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
