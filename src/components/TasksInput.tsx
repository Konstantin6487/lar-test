import * as React from 'react';

import { Button, Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';
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

  public handleClick = () => {
    const { addTask, clearTask, taskInput } = this.props;
    addTask(taskInput);
    clearTask();
  }

  public render() {
    return (
      <Row className="justify-content-center">
        <Col xs="10">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button disabled={!this.props.taskInput} onClick={this.handleClick}>
                Create task
              </Button>
            </InputGroupAddon>
            <Input
              onChange={this.handleChange}
              value={this.props.taskInput}
            />
          </InputGroup>
        </Col>
      </Row>
    );
  }
}
