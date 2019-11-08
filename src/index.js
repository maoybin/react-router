import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { BrowserRouter as Router,Route} from 'react-router-dom'

/**
 * 
 * React 全家桶 redux react-redux 
 * 
 * router
 * 
 * ant.design 蚂蚁金服团队  
 * 
 * 
 *  */
ReactDOM.render(
     <Router>
         <Route component={App} />
     </Router>, 
     document.getElementById('root')
);

