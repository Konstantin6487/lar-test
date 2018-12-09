import * as React from 'react';
import { Col, Row } from 'reactstrap';

export default class TasksHeader extends React.Component {
  // tslint:disable-next-line
  public render() {
    return (
      <Row className="justify-content-center">
        <Col xs="10">
          <h1>Список задач</h1>
          </Col>
      </Row>
    );
  }
}
