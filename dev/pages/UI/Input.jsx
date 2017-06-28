'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Input} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			val : ''
		}
	}

	handleChange(e){
		this.setState({
			val:e.target.value
		})
	}

	searchClick(){
		console.log("搜索值：",this.state.val)
	}

	componentDidMount() {
	 	     
	}

	render(){
		return (
	        <div className="mt-panel">
        		<h3 className="mt-panel-h2">input</h3>
	          	<div className="mt-panel-box">
	          		<Grid width="1/1">
	          			<Input disabled={true} placeholder="size:lg" size="lg"/>&nbsp;
	          			<Input placeholder="size:nm" size="nm"/>&nbsp;
	          			<Input placeholder="size:sm" size="sm"/>&nbsp;
	          			<Input placeholder="size:xs" size="xs"/>&nbsp;
	          			<Input type="textarea" placeholder="textarea"/>&nbsp;
	          		</Grid>
	          		<br/>
	          		<br/>
	          		<Grid width="1/1">
	          			<Input placeholder="带小图标" prefix={<i className="iconfont icon-user"></i>}/>&nbsp;
	          			<Input onChange={this.handleChange.bind(this)} value={this.state.val} placeholder="带小图标" suffix={<a onClick={this.searchClick.bind(this)}><i className="iconfont icon-search"></i></a>}/>&nbsp;
	          		</Grid>
	          		<Grid>
<pre>
<code>
{`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Input} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			val : ''
		}
	}

	handleChange(e){
		this.setState({
			val:e.target.value
		})
	}

	searchClick(){
		console.log("搜索值：",this.state.val)
	}

	componentDidMount() {
	 	     
	}

	render(){
		return (
	        <div className="mt-panel">
        		<h3 className="mt-panel-h2">input</h3>
	          	<div className="mt-panel-box">
	          		<Grid width="1/1">
	          			<Input placeholder="size:lg" size="lg"/>&nbsp;
	          			<Input placeholder="size:nm" size="nm"/>&nbsp;
	          			<Input placeholder="size:sm" size="sm"/>&nbsp;
	          			<Input placeholder="size:xs" size="xs"/>&nbsp;
	          		</Grid>
	          		<br/>
	          		<br/>
	          		<Grid width="1/1">
	          			<Input placeholder="带小图标" prefix={<i className="iconfont icon-user"></i>}/>&nbsp;
	          			<Input onChange={this.handleChange.bind(this)} value={this.state.val} placeholder="带小图标" suffix={<a onClick={this.searchClick.bind(this)}><i className="iconfont icon-search"></i></a>}/>&nbsp;
	          		</Grid>
	          	</div>
	        </div>
	    );
	}
}

//主页
export default Dom;
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