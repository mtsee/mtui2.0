'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,Tree} from '../../mtui/index'

const TreeChild = Tree.TreeChild;

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	render(){
		return (
			<Panel header="Tree">

				<pre><code>
				{`
					...
				`}
				</code></pre>
			</Panel>	
	    );
	}
}

//主页
export default UI;