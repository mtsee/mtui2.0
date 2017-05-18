'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Tip, BackTop} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<div className="mt-panel">
        		<h3 className="mt-panel-h2">backtop 返回顶部</h3>
        		<br/>
        		<div>使劲往下滑</div>
	          	<div>
<pre>
<code>
{`
import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Tip, BackTop} from '../../mtui/index'

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<div className="mt-panel">
        		<h3 className="mt-panel-h2">backtop 返回顶部</h3>
	          	<div className="mt-panel-box">
	          		<BackTop time={500} top={100} dom={<a>back top</a>}/>
	          		<BackTop time={500} top={0} visibilityHeight={200}/>
	          	</div>
	        </div>
	    );
	}
}
`}
</code>
</pre>
	          	</div>
	          	<div style={{height:800}}></div>
	          	<div className="mt-panel-box">
	          		<BackTop time={500} top={100} dom={<a>back top</a>}/>
	          		<BackTop time={500} top={0} visibilityHeight={200}/>
	          	</div>
	        </div>
	    );
	}
}

//主页
export default Dom;