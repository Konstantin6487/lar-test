import * as React from 'react';
import {
  Button,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from 'reactstrap';

import { IPropsTasksInput } from '../types/tasksInput';

export default class TasksInput extends React.Component<IPropsTasksInput> {

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      addTask,
      clearTask,
      taskInput,
    } = this.props;
    addTask(taskInput!);
    clearTask();
  }

  public render() {
    return (
      <Row className="justify-content-center">
        <Col xs="10">
          <Form onSubmit={this.handleSubmit}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <Button disabled={!this.props.taskInput}>
                  Новая задача
                </Button>
              </InputGroupAddon>
              <Input
                onChange={this.props.enterTaskConnect}
                autoComplete="off"
                maxLength={140}
                title={'Не более 140 символов'}
                value={this.props.taskInput}
              />
            </InputGroup>
            </Form>
        </Col>
      </Row>
    );
  }
}
