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
    const { addTask, clearTask, taskInput } = this.props;
    addTask(taskInput!);
    clearTask();
  }

  public render() {

    const { taskInput, enterTaskConnect } = this.props;

    const isButtonDisabled = (str: string) =>
      !str || str.split('').every(item => item === ' ');

    return (
      <Row className="justify-content-center">
        <Col xs="10">
          <Form onSubmit={this.handleSubmit}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <Button disabled={isButtonDisabled(taskInput!)}>Новая задача</Button>
              </InputGroupAddon>
              <Input
                onChange={enterTaskConnect}
                autoComplete="off"
                maxLength={140}
                title={'Не более 140 символов'}
                value={taskInput}
              />
            </InputGroup>
            </Form>
        </Col>
      </Row>
    );
  }
}
