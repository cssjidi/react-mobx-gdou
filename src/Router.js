import React from 'react';
import {HashRouter, Route, Switch,Link} from 'react-router-dom';


import App from './App';
import Home from './Containers/Home';
import Detail from './Containers/Detail';


const BasicRoute = () => (
	
	    <HashRouter>
	    	<Switch>
	    		<Route path="/" component={Home} />
	    		<Route path="/" component={Detail} /> 
	    	</Switch>
	    </HashRouter>
	
);

export default BasicRoute