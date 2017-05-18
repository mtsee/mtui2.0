'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Panel,SliderBar} from '../../mtui/index'

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
	        <Panel header="sliderBar">
        		<SliderBar type="danger" width={300} value={0.5} /> <br/><br/>
        		<SliderBar type="success" width={300} value={0.6} /> <br/><br/>
        		<SliderBar type="default" width={300} value={0.7} /> <br/><br/>
        		<SliderBar type="primary" width={300} value={0.8} /> <br/><br/>
        		<SliderBar type="info" width={300} value={0.9} /> <br/><br/>
	        	<div>
					<pre>
					<code>
{`

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Panel,SliderBar} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
	        <Panel header="slider">
        		<SliderBar type="danger" width={300} value={0.5} /> <br/><br/>
        		<SliderBar type="success" width={300} value={0.6} /> <br/><br/>
        		<SliderBar type="default" width={300} value={0.7} /> <br/><br/>
        		<SliderBar type="primary" width={300} value={0.8} /> <br/><br/>
        		<SliderBar type="info" width={300} value={0.9} /> <br/><br/>
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