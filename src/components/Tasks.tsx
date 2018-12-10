import * as React from 'react';
import { Container } from 'reactstrap';

import TasksHeader from './TasksHeader';
import TasksInput from '../containers/TasksInput';
import TasksTable from '../containers/TasksTable';
import TasksSwitch from '../containers/TasksSwitch';
import TasksModal from '../containers/TasksModal';

export default class Tasks extends React.Component {

  public static Header = TasksHeader;
  public static Input = TasksInput;
  public static Table = TasksTable;
  public static Switch = TasksSwitch;
  public static Modal = TasksModal;
  public render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}
