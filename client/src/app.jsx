import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {browserHistory, Router} from 'react-router';
import routes from './config/routes.js';

ReactDom.render((<Router history={browserHistory} routes={routes} />), document.getElementById('react-app'));