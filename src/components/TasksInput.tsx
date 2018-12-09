import * as React from 'react';
import { Button, Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';

export default class TasksInput extends React.Component {
  // tslint:disable-next-line
  public render() {
    return (
      <Row className="justify-content-center">
        <Col xs="10">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button>Create task</Button>
            </InputGroupAddon>
            <Input />
          </InputGroup>
        </Col>
      </Row>
    );
  }
}
