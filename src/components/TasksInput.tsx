import * as React from 'react';

import { Button, Col, Form, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
export default class TasksInput extends React.Component<
  {
    taskInput: string;
    enterTask: (value: string) => void;
    addTask: (value: string) => void;
    clearTask: () => void;
  }> {

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    this.props.enterTask(value);
  }

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { addTask, clearTask, taskInput } = this.props;
    addTask(taskInput);
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
                  Create task
                </Button>
              </InputGroupAddon>
              <Input
                onChange={this.handleChange}
                value={this.props.taskInput}
                maxLength={140}
                title={'Не более 140 символов'}
              />
            </InputGroup>
            </Form>
        </Col>
      </Row>
    );
  }
}
