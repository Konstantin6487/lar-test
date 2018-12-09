import * as React from 'react';

import { isEmpty } from 'lodash';
import { FormGroup, Label, Input, Col, Row } from 'reactstrap';

export default class TasksSwitch extends React.Component<any> {

  public handleChange = () => {
    this.props.toggleShowCompleted();
  }

  public render() {

    if (isEmpty(this.props.tasks)) {
      return null;
    }

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
