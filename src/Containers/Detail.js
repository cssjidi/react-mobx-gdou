import React from 'react';
import {inject, observer} from 'mobx-react';

class Detail extends React.Component {
	constructor(){
		super();
	}
	render(){
		return (
			<div>
			Detail
			</div>
			)
	}
}

export default inject('HeaderStore')(observer(Detail))