'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Dropdown,Panel} from '../../mtui/index'

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			name : 10
		}
	}

	closeBack(){
		console.log('close')
	}

	showBack(){
		const _this = this;
		console.log('show')
		_this.setState({
			name: ++this.state.name
		})
	}

	render(){
		return (

			<Panel header="Dropdown 弹窗">
				<Dropdown btn={<a className="mt-btn mt-btn-success"><i>下拉框hover</i></a>} modalStyle={{width:200, height:200}} visible={false} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)} trigger="hover">
        			<Panel header="弹窗">
        				{this.state.name}
        			</Panel>
        		</Dropdown>
        		&nbsp;
        		&nbsp;
        		<Dropdown btn={<a className="mt-btn mt-btn-success"><i>下拉框hover</i></a>} modalStyle={{width: 200, height: 200}}>
        			<Panel header="弹窗">
        				{this.state.name}
        			</Panel>
        		</Dropdown>

        		&nbsp;
        		&nbsp;

        		<Dropdown btn={<a className="mt-btn mt-btn-info"><i>下拉框click</i></a>} modalStyle={{width:100, height:100}} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)} trigger="click">
        			<Panel size="min" header="弹窗2">
        				{this.state.name}
        			</Panel>
        		</Dropdown>

<div>
<pre>
<code>
{`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Dropdown,Panel} from '../../mtui/index'

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			name : 10
		}
	}

	closeBack(){
		console.log('close')
	}

	showBack(){
		const _this = this;
		console.log('show')
		_this.setState({
			name: ++this.state.name
		})
	}

	render(){
		return (
			<Panel header="Dropdown 弹窗">
				<Dropdown btn={<a className="mt-btn mt-btn-success"><i>下拉框hover</i></a>} modalStyle={{width:200, height:200}} visible={false} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)} trigger="hover">
        			<Panel header="弹窗">
        				{this.state.name}
        			</Panel>
        		</Dropdown>
        		&nbsp;
        		&nbsp;
        		<Dropdown btn={<a className="mt-btn mt-btn-success"><i>下拉框hover</i></a>} modalStyle={{width: 200, height: 200}}>
        			<Panel header="弹窗">
        				{this.state.name}
        			</Panel>
        		</Dropdown>

        		&nbsp;
        		&nbsp;

        		<Dropdown btn={<a className="mt-btn mt-btn-info"><i>下拉框click</i></a>} modalStyle={{width:100, height:100}} showBack={this.showBack.bind(this)} closeBack={this.closeBack.bind(this)} trigger="click">
        			<Panel size="min" header="弹窗2">
        				{this.state.name}
        			</Panel>
        		</Dropdown>
			</Panel>
	    );
	}
}

//主页
export default UI;
`}
</code>
</pre>
</div>

			</Panel>
	    );
	}
}

//主页
export default UI;