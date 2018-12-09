import * as React from 'react';
import { Container } from 'reactstrap';

import TasksHeader from './TasksHeader';
import TasksInput from '../containers/TasksInput';
import TasksTable from '../containers/TasksTable';
import TasksSwitch from '../containers/TasksSwitch';

export default class Tasks extends React.Component {

  public static readonly Header = TasksHeader;
  public static readonly Input = TasksInput;
  public static readonly Table = TasksTable;
  public static readonly Switch = TasksSwitch;
  public render() {
    return <Container>{this.props.children}</Container>;
  }
}
