import * as React from 'react';
import { Container } from 'reactstrap';

import TasksHeader from './TasksHeader';
import TasksInputContainer from '../containers/TasksInputContainer';
import TasksTableContainer from '../containers/TasksTableContainer';
import TasksSwitchContainer from '../containers/TasksSwitchContainer';
import TasksModalContainer from '../containers/TasksModalContainer';

export default class Tasks extends React.Component {

  public static Header = TasksHeader;
  public static Input = TasksInputContainer;
  public static Table = TasksTableContainer;
  public static Switch = TasksSwitchContainer;
  public static Modal = TasksModalContainer;
  public render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}
