import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Background from './Background';

const App = () => (
  <MuiThemeProvider>
    <Background />
  </MuiThemeProvider>
);

export default App;
