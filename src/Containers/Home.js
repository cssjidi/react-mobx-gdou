import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import List from '../Components/List'

const list = [
	{
		text:'List1',
		id:'List1'
	},
	{
		text:'List2',
		id:'List2'
	},
	{
		text:'List3',
		id:'List3'
	},
	{
		text:'List4',
		id:'List4'
	},
	{
		text:'List5',
		id:'List5'
	}
]

@inject('CommonStore','AuthStore')
@observer
class Home extends Component {
	constructor(props) {
    super(props);
    this.state = {
      name: 'default'
    };
    this.props.CommonStore.setTitle('首页')
  }
  static propTypes = {
    name:PropTypes.array
  }
 UNSAFE_componentWillMount(){
     console.log(this.props)
  }
	handleClick(text){
  	this.setState({
      name:text
    })
  }
  login(){
    this.props.AuthStore.setToken()
  }
  render () {
    let name = this.state.name
    return (
        <div style={{ height: '100%' }}>
        {list.map((item,index)=>{
        	return (
        		<ul key={index}>
        		<List id={item.id} name={this.props.name} onClick={(text)=>this.handleClick(text)} text={item.text}/>
        		</ul>
        	)
        })}
        <button onClick={()=>this.login()}>login</button>
        <div>
        {name}
        </div>
        </div>
    )
  }
}

export default Home
