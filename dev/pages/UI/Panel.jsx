'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel} from '../../mtui/index'

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<Grid width="1/1">
				<Grid width="1/2" sm="2/2">
					<Panel header="面板1">
						这是一个响应式案例，缩小到640px试试<br/>
			          	.mt-panel<br/>
			          	.mt-panel-h2<br/>
			          	.mt-panel-box<br/>
					</Panel>	
		        </Grid>
		        <Grid width="1/2" sm="2/2">
		          	<Panel header="面板2">
						这是一个响应式案例，缩小到640px试试<br/>
			          	.mt-panel<br/>
			          	.mt-panel-h2<br/>
			          	.mt-panel-box<br/>
					</Panel>
		        </Grid>
		        <Grid width="1/1">
		        	<Panel size="min" header="面板3">
		        		小面板
					</Panel>
		        </Grid>
		        <Grid width="1/1">
		        	<Panel size="xm" header="面板3">
		        		小面板
					</Panel>
		        </Grid>
<div>
<pre>
<code>
{`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel} from '../../mtui/index'

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<Grid width="1/1">
				<Grid width="1/2" sm="2/2">
					<Panel header="面板1">
						这是一个响应式案例，缩小到640px试试<br/>
			          	.mt-panel<br/>
			          	.mt-panel-h2<br/>
			          	.mt-panel-box<br/>
					</Panel>	
		        </Grid>
		        <Grid width="1/2" sm="2/2">
		          	<Panel header="面板2">
						这是一个响应式案例，缩小到640px试试<br/>
			          	.mt-panel<br/>
			          	.mt-panel-h2<br/>
			          	.mt-panel-box<br/>
					</Panel>
		        </Grid>
		        <Grid width="1/1">
		        	<Panel size="min" header="面板3">
		        		小面板
					</Panel>
		        </Grid>
	        </Grid>
	    );
	}
}
`}
</code>
</pre>
</div>
	        </Grid>
	    );
	}
}

//主页
export default UI;