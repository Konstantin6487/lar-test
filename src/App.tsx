import * as React from 'react';
import Tasks from './components/Tasks';

const App: React.SFC = () => (
  <Tasks>
    <Tasks.Header />
    <Tasks.Input />
    <Tasks.Switch />
    <Tasks.Table />
    <Tasks.Modal />
  </Tasks>
);

export default App;
