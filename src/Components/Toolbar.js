import React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';

const styleDiv = {
  padding: '0px 127px',
};

const styleToolbar = {
  background: 'white',
  padding: '0px',
};

const styleUber = {
  margin: '0px', 
};

const styleTabs = {
  marginLeft: '28px',
  background: 'white',
};

const StyleTab = {
  TabLeft : {
  padding: '0px 20px',
  borderTop: '4px',
  background: 'white',
  color: 'black',
  textTransform: 'capitalize',
  },
  TabRight: {
    padding: '0px',
    margin: '0px',
    borderTop: '4px',
    background: 'white',
    color: 'black',
  },
};

const styleInkBar = {
  background:'white',
};

export default class ToolbarExamplesSimple extends React.Component {

  render() {
    return (
      <div style={styleDiv}>
        <Toolbar style={styleToolbar}>
          <ToolbarGroup>
            <FlatButton 
              label='UBAR' 
              hoverColor='white'
              style= {styleUber}
              href="/"
            /> 
            <Tabs style={styleTabs} inkBarStyle={styleInkBar}>
              <Tab label="Ride" style={StyleTab.TabLeft} href="/bookACab">
              </Tab>
              <Tab label="Drive" style={StyleTab.TabLeft} href="/DriverSignIn">
              </Tab>
            </Tabs> 
          </ToolbarGroup>
          <ToolbarGroup>
            <FlatButton label="Help" style={StyleTab.TabRight} href="/help" />
            <FlatButton label="Sign Up" style={StyleTab.TabRight} href="/UserSignIn" />
            <FlatButton label="Login" style={StyleTab.TabRight} href="/Login" />
            <FlatButton label="Log out" style={StyleTab.TabRight}  />
          </ToolbarGroup>
        </Toolbar>
      </div>  
    );
  }
}
