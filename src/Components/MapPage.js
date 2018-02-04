import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Map from './Map';
import BookCab from './BookCab';

const App = () => (
  <MuiThemeProvider>
    <BookCab />
    <Map />
  </MuiThemeProvider> 
);

export default App;
