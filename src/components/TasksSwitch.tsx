import * as React from 'react';
import { FormGroup, Label, Input, Col, Row } from 'reactstrap';

export default class TasksSwitch extends React.Component<{ toggleShowCompleted: () => void }> {

  public handleChange = () => {
    this.props.toggleShowCompleted();
  }

  public render() {
    return (
      <Row className="justify-content-center">
        <Col xs="10">
          <FormGroup className="is-show-completed" check={true} inline={true}>
            <Label check={true}>
              <Input type="checkbox" onChange={this.handleChange} />Скрыть выполненные
            </Label>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}