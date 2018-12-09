import * as React from 'react';
import { FormGroup, Input, Col, Row, Table } from 'reactstrap';

import './tasks.scss';

export default class TasksTable extends React.Component {
  // tslint:disable-next-line
  public render() {
    return (
      <Row className="justify-content-center">
        <Col xs="10">
          <Table className="table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Наименование</th>
                <th>Дата</th>
                <th>Статус</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="Col">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td><FormGroup check={true} inline={true}>
                  <Input type="checkbox" />
                </FormGroup></td>
                <td>
                  <span>[редактировать]</span><span>[сохранить]</span>
                </td>
              </tr>
              <tr>
                <th scope="Col">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td><FormGroup check={true} inline={true}>
                  <Input type="checkbox" />
                </FormGroup></td>
                <td>
                  <span>[редактировать]</span><span>[сохранить]</span>
                </td>
              </tr>
              <tr>
                <th scope="Col">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td><FormGroup check={true} inline={true}>
                  <Input type="checkbox" />
                </FormGroup></td>
                <td>
                  <span>[редактировать]</span><span>[сохранить]</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}
