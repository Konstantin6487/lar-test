import * as React from 'react';
import { isEmpty } from 'lodash';
import {
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

import { IPropsTasksSwitch } from '../types/tasksSwitch';

export default class TasksSwitch extends React.Component<IPropsTasksSwitch> {

  public handleChange = () =>
    this.props.toggleShowCompleted()

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
