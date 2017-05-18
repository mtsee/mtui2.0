'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Switch,Button} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			val : true
		}
	}

	onChange(data){
		console.log(data) //
	}

	onClick(){
		this.setState({
			val: !this.state.val
		})
	}

	render(){
		return (
	        <div className="mt-panel">
        		<h3 className="mt-panel-h2">switch</h3>
	          	<div className="mt-panel-box">
			        <Grid width="1/1">
			        	默认值true<Switch defaultValue={this.state.val} size="lg" onChange={this.onChange}/> &nbsp;
			        	默认值false<Switch defaultValue={false} onChange={this.onChange}/> &nbsp;
			        	disabled=true<Switch disabled={true} onChange={this.onChange}/> &nbsp;
			        	size="sm"<Switch size="sm" onChange={this.onChange}/> &nbsp;
			        	size="xs"<Switch size="xs" onChange={this.onChange}/> &nbsp;

			        	<Button type="info" onClick={this.onClick.bind(this)}>控制</Button>

		          	</Grid>
		          	<Grid width="1/1">
<pre>
<code>
{`
import './style.scss';
import React, { Component } from 'react';
import {Grid,Switch} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			val : true
		}
	}

	onChange(data){
		console.log(data) //
	}

	onClick(){
		this.setState({
			val: !this.state.val
		})
	}

	render(){
		return (
	        <div className="mt-panel">
        		<h3 className="mt-panel-h2">switch</h3>
	          	<div className="mt-panel-box">
			        <Grid width="1/1">
			        	默认值true<Switch defaultValue={this.state.val} size="lg" onChange={this.onChange}/> &nbsp;
			        	默认值false<Switch defaultValue={false} onChange={this.onChange}/> &nbsp;
			        	disabled=true<Switch disabled={true} onChange={this.onChange}/> &nbsp;
			        	size="sm"<Switch size="sm" onChange={this.onChange}/> &nbsp;
			        	size="xs"<Switch size="xs" onChange={this.onChange}/> &nbsp;

			        	<Button type="info" onClick={this.onClick.bind(this)}>控制</Button>

		          	</Grid>
	          	</div>
	        </div>
	    );
	}
}

`}
</code>
</pre>
		          	</Grid>
	          	</div>
	        </div>
	    );
	}
}

//主页
export default Dom;