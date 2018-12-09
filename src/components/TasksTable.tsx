import * as React from 'react';
import { isEmpty, values } from 'lodash';
import { FormGroup, Input, Col, Row, Table } from 'reactstrap';
import TasksModal from './TasksModal';

import { IPropsTasksTable } from '../types/tasksTable';

import './tasks.scss';

export default class TasksTable extends React.Component<IPropsTasksTable> {

  public handleRemoveTask = (id: string) => () => {
    this.props.removeTask(id);
  }

  public handleChangeTaskStatus = (id: string) => () => {
    this.props.changeTaskStatus(id);
  }

  public handleChangeActiveTask = (id: string) => () => {
    this.props.changeActiveTask(id);
    this.props.toggleShowModal();
  }

  public renderTableRow = () => {
    const { tasks, isShowCompleted } = this.props;
    return values(tasks).map(({ id, task, date, isCompleted }) => {
      if (isCompleted && isShowCompleted) {
        return null;
      }
      return (
        <tr key={id}>
          <th scope="Col">{id}</th>
          <td>{task}</td>
          <td>{date}</td>
          <td><FormGroup check={true} inline={true}>
            <Input
              type="checkbox"
              onChange={this.handleChangeTaskStatus(String(id))}
              checked={isCompleted}
            />
          </FormGroup></td>
          <td>
            <span className="show-modal-button" onClick={this.handleChangeActiveTask(String(id))}>[редактировать]</span>
            <span className="remove-button" onClick={this.handleRemoveTask(String(id))}>[удалить]</span>
          </td>
        </tr>
      );
    });
  }

  public renderTasksModal = () => {
    const { activeTask, isShowModal, toggleShowModal } = this.props;
    if (isShowModal) {
      return (
        <TasksModal
          toggleShowModal={toggleShowModal}
          isShowModal={isShowModal}
          activeTask={activeTask}
        />
      );
    }
    return null;
  }

  public render() {

    if (isEmpty(this.props.tasks)) {
      return null;
    }
    return (
      <Row className="justify-content-center">
        <Col xs="10">
          <Table className="table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Наименование</th>
                <th>Дата</th>
                <th>Статус</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTableRow()}
            </tbody>
          </Table>
        </Col>
        {this.renderTasksModal()}
      </Row>
    );
  }
}
