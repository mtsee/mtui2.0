'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Panel,Slider} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			val : 300
		}
	}

	onChange(data){
		console.log(data)
		this.setState({
			val: parseInt(data, 10)
		})
	}

	sliderEnd(data){
		console.log(data)
	}

	render(){
		return (
	        <Panel header="slider">
        		<Slider sliderEnd={this.sliderEnd.bind(this)} 
	        		onChange={this.onChange.bind(this)} 
	        		width={300} 
	        		defaultValue={300} 
	        		minValue={200} 
	        		maxValue={1000} />

	        		{this.state.val}
	        	<div>
					<pre>
					<code>
{`

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Panel,Slider} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	onChange(data){
		console.log(data)
	}

	sliderEnd(data){
		console.log(data)
	}

	render(){
		return (
	        <Panel header="slider">
        		<Slider sliderEnd={this.sliderEnd.bind(this)} 
	        		onChange={this.onChange.bind(this)} 
	        		width={300} 
	        		defaultValue={150} 
	        		minValue={100} 
	        		maxValue={200} />
	        </Panel>
	    );
	}
}
`}
					</code>
					</pre>
	        	</div>
	        </Panel>
	    );
	}
}

//主页
export default Dom;