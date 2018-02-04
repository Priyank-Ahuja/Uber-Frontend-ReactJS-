import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserSignIn from './UserSignIn'

const App = () => (
    <MuiThemeProvider>
      <UserSignIn />
    </MuiThemeProvider>
  );
  
  export default App;