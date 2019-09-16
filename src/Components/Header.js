import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import {NavBar,Icon} from 'antd-mobile' 
import {inject, observer} from 'mobx-react';

@inject('CommonStore')
@observer
class Header extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const icon = this.props.CommonStore.isHome ? <Icon type="left" />:''
		return (
			<NavBar
		      mode="dark"
		      icon={icon}
		      onLeftClick={() => console.log('onLeftClick')}
		      rightContent={[
		        <Icon key="1" type="ellipsis" />,
		      ]}
		    >{this.props.CommonStore.title}</NavBar>
		)
	}
}

export default Header