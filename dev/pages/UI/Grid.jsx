'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button} from '../../mtui/index'

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
		  num:5
		};
	}

	selectGrid(e){
		console.log(e.target.value);
		this.setState({
			num : e.target.value
		})
	}

	render(){
		let arr = [],grid=[];
		for(let i=0; i < 16; i++){
			grid.push(i);
		}
		for(let i=0; i < this.state.num; i++){
			arr.push(i);
		}
		return (
	        <div className="mt-panel">
        		<h3 className="mt-panel-h2">栅格系统</h3>
        		<div className="mt-panel">	
        			选择栅格：<select value={this.state.num} onChange={this.selectGrid.bind(this)}>
	        			{
	        				grid.map(function(elem, index) {
		        				index = parseInt(index, 10)+1
		        				if(index <= 16)
		        					return <option key={index} value={index}>{index}</option>;
		        				else
		        					return null;
		        			})
	        			}
	        		</select>
	        		<Grid sm="2/2" md="1/2" lg="1/2" className="grids">
		        		{
		        			arr.map(function(elem,index) {
		        				index = parseInt(index, 10)
		        				return <div key={index}><Grid width={(index+1)+'/'+arr.length}>{index+1}/{arr.length}</Grid></div>;
		        			})
		        		}
	        		</Grid>
	        		<div className="code">
	        			width:正常 <br/>
	        			sm {`<=`} 640px <br/>
	        			640px {`<`} md {`<=`} 1024px <br/>
	        			lg {`>`} 1024px <br/>
	        			可用参数：sm, md, lg, smOffset, mdOffset, lgOffset, offset, width
	        		</div>
	        		<div>
	        			<br/>
	        			<br/>
	        			<Grid sm="1/1" md="1/2" lg="1/4" offset="1/12"><Button block={true} type="info">栅格</Button></Grid>
	        		</div>
	        		<div>
<pre>
<code>
{`
import './style.scss';
import React, { Component } from 'react';
import {Grid,Button} from '../../mtui/index'

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<Grid width="1/1" sm="1/1" md="1/2" lg="1/4" offset="1/12"><Button block={true} type="info">栅格</Button></Grid>
		)
	}
}
`}
</code>
</pre>	        		
	        		</div>
        		</div>

	        </div>
	    );
	}
}

//主页
export default UI;