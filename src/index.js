import React from 'react';
import { render } from 'react-dom';
import Example from './Example';

const App = () => (
  <div>
    <h1>Sandbox ReactJS Coverflow</h1>
    <Example />
  </div>
);

render(<App />, document.getElementById('root'));
