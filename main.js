import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';


import App from './components/App.jsx';
import DataManagement from './components/DataManagement.jsx';



var root = document.getElementById('root');



ReactDOM.render(
	<DataManagement>
 		<App/> 
 	</DataManagement>
 , root);