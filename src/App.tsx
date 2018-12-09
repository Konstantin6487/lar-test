import * as React from 'react';

import Tasks from './components/Tasks';
export default class App extends React.Component {
  // tslint:disable-next-line
  public render() {
    return (
      <Tasks>
        <Tasks.Header />
        <Tasks.Input />
        <Tasks.Switch />
        <Tasks.Table />
      </Tasks>
    );
  }
}
