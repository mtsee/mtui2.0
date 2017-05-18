'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
	        <div className="mt-panel">
        		<h3 className="mt-panel-h2">按钮</h3>
	          	<div className="mt-panel-box">
	          		<Grid width="1/2" className="btns">
	          			<Button type="primary" block={true}>block:true</Button><br/>
	          			<Button type="success">block:false</Button>
	          		</Grid>
	          		<Grid width="2/2" className="btns">
	          			<Button>default</Button>
	          			<Button type="primary">primary</Button>
	          			<Button type="success">success</Button>
	          			<Button type="info">info</Button>
	          			<Button type="warning">warning</Button>
	          			<Button type="danger">danger</Button>
	          		</Grid>
	          		<Grid width="2/2" className="btns">
	          			<Button size="lg" type="info">大按钮</Button>
	          			<Button type="info">正常按钮</Button>
	          			<Button size="sm" type="info">小按钮</Button>
	          			<Button size="xs" type="info">超小按钮</Button>
			        </Grid>
			        <Grid width="2/2" className="btns">
		          		<Button dom="a" type="success">按钮</Button>
		          		<Button disabled={true} type="warning">按钮</Button>
		          	</Grid>
		          	<Grid width="2/2" className="btns">
		          		<Button type="success" prefix={<i className="iconfont icon-loading2 mt-animate-rotate"></i>}>按钮</Button>
		          		<Button type="success" suffix={<i className="iconfont icon-loading1 mt-animate-rotate"></i>}>按钮</Button>
		          		<Button disabled={true} type="warning">按钮</Button>
		          	</Grid>
		          	<Grid>
<pre>
<code>
{`
import './style.scss';
import React, { Component } from 'react';
import {Grid,Button} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
	        <div className="mt-panel">
        		<h3 className="mt-panel-h2">按钮</h3>
	          	<div className="mt-panel-box">
	          		<Grid width="1/2" className="btns">
	          			<Button type="primary" block={true}>block:true</Button><br/>
	          			<Button type="success">block:false</Button>
	          		</Grid>
	          		<Grid width="2/2" className="btns">
	          			<Button>default</Button>
	          			<Button type="primary">primary</Button>
	          			<Button type="success">success</Button>
	          			<Button type="info">info</Button>
	          			<Button type="warning">warning</Button>
	          			<Button type="danger">danger</Button>
	          		</Grid>
	          		<Grid width="2/2" className="btns">
	          			<Button size="lg" type="info">大按钮</Button>
	          			<Button type="info">正常按钮</Button>
	          			<Button size="sm" type="info">小按钮</Button>
	          			<Button size="xs" type="info">超小按钮</Button>
			        </Grid>
			        <Grid width="2/2" className="btns">
		          		<Button dom="div" type="success">按钮</Button>
		          		<Button disabled={true} type="warning">按钮</Button>
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