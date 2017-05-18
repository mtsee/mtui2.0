'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Grid, Panel, Limit } from '../../mtui/index';

class UI extends Component {
	//构造函数
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid width="1/1">
				<Grid width="1/1">
					<Panel header="Limit">
						<Limit size="10">字数超过10个会自动以省略号结束。这个组件很有用！</Limit>
					</Panel>
				</Grid>
				<div>
					<pre>
						<code>
							{`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Grid, Panel, Limit } from '../../mtui/index';

class UI extends Component {
	//构造函数
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid width="1/1">
				<Grid width="1/1">
					<Panel header="Limit">
						<Limit size="10">字数超过10个会自动以省略号结束。这个组件很有用！</Limit>
					</Panel>
				</Grid>
			</Grid>
		);
	}
}

//主页
export default UI;
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