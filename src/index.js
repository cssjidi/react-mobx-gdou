import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { NavBar, Icon, Flex } from 'antd-mobile';

import './index.css';

import Router from './Router'
import App from './App';
import Header from './Components/Header';

import * as stores from './Mobx'

ReactDOM.render(
	<Provider {...stores}>
	<div className="flex-container">
		<Header />
	    <Flex>
	    </Flex>
		<Router />
		</div>
	</Provider>, document.getElementById('root'));

