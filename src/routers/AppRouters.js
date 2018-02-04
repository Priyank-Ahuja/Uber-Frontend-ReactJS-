import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './../Components/HomePage';
import UserSignInPage from './../Components/UserSignInPage';
import NotFoundPage from './../Components/NotFoundPage';
import HelpPage from './../Components/HelpPage';
import ToolBar from './../Components/Toolbar';
import DriverSignInPage from './../Components/DriverSignInPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginPage from './../Components/LoginPage';
import RidePage from './../Components/RidePage';
import MapPage from './../Components/MapPage';

const AppRouter = () => (
    <BrowserRouter>
        <MuiThemeProvider>
            <ToolBar />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/UserSignIn" component={UserSignInPage} />
                <Route path="/DriverSignIn" component={DriverSignInPage} />
                <Route path="/Login" component={LoginPage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/bookACab" component={RidePage} />
                <Route path="/map" component={MapPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </MuiThemeProvider>
    </BrowserRouter>
);

export default AppRouter;