import * as React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';

const TasksHeader: React.SFC = () => (
  <Row className="justify-content-center">
    <Col xs="10">
      <h1>Список задач</h1>
    </Col>
  </Row>
);

export default TasksHeader;
