'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,Progress,Button} from '../../mtui/index'

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			value : 0.5
		}
	}

	add(){
		let val = this.state.value;
		val+=0.1;
		if(val > 1){
			val = 1;
		}
		this.setState({
			value: val
		})
	}

	del(){
		let val = this.state.value;
		val-=0.1;
		if(val < 0){
			val = 0;
		}
		this.setState({
			value: val
		})
	}

	render(){
		return (
			<Panel header="Progress">
				<Progress fixed={0} value={this.state.value} strokeWidth={4}/>
				&nbsp;&nbsp;
				<Progress size={200} fixed={1} bgColor="#dcdcdc" barColor="#F00" value={this.state.value} strokeWidth={4}/>
				&nbsp;&nbsp;
				<Button type="info" onClick={this.add.bind(this)}>+</Button>
				&nbsp;
				<Button type="info" onClick={this.del.bind(this)}>-</Button>
				<pre><code>
				{`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,Progress,Button} from '../../mtui/index'

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			value : 0.5
		}
	}

	add(){
		let val = this.state.value;
		val+=0.1;
		if(val > 1){
			val = 1;
		}
		this.setState({
			value: val
		})
	}

	del(){
		let val = this.state.value;
		val-=0.1;
		if(val < 0){
			val = 0;
		}
		this.setState({
			value: val
		})
	}

	render(){
		return (
			<Panel header="Progress">
				<Progress fixed={0} value={this.state.value} strokeWidth={4}/>
				&nbsp;&nbsp;
				<Progress size={200} fixed={1} bgColor="#dcdcdc" barColor="#F00" value={this.state.value} strokeWidth={4}/>
				&nbsp;&nbsp;
				<Button type="info" onClick={this.add.bind(this)}>+</Button>
				&nbsp;
				<Button type="info" onClick={this.del.bind(this)}>-</Button>
			</Panel>	
	    );
	}
}
				`}
				</code></pre>
			</Panel>	
	    );
	}
}

//主页
export default UI;