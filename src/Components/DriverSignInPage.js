import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DriverSignIn from './DriverSignIn'

const App = () => (
    <MuiThemeProvider>
      <DriverSignIn />
    </MuiThemeProvider>
  );
  
  export default App;