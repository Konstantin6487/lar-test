import * as React from 'react';

import { Container } from 'reactstrap';

import TasksHeader from './TasksHeader';
import TasksInput from './TasksInput';
import TasksTable from './TasksTable';
import TasksSwitch from './TasksSwitch';

export default class Tasks extends React.Component {

  public static Header = TasksHeader;
  public static Input = TasksInput;
  public static Table = TasksTable;
  public static Switch = TasksSwitch;
  public render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}
