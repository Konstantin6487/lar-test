import * as React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,

  FormGroup,
  Label,
  Input,
} from 'reactstrap';

export default class TasksModal extends React.Component<any> {
  public render() {
    return (
      <Modal isOpen={this.props.isShowModal} toggle={this.props.toggleShowModal}>
        <ModalHeader toggle={this.props.toggleShowModal}>Редактирование задачи</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="exampleText">Измените задачу №{this.props.activeTask}</Label>
            <Input type="textarea" name="text" id="exampleText" maxLength={140} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.toggleShowModal}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.props.toggleShowModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
