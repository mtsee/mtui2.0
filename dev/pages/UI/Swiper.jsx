'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Panel,Swiper} from '../../mtui/index'

const SwiperItem = Swiper;

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	changeback(a){
	    console.log(a)
	}

	render(){
		return (
	        <Panel header="Swiper">
        		<Swiper autoPlay={3000} button={true} style={{width:600}} activeIndex="1" animate="move" changeback={this.changeback.bind(this)}>
	        		<SwiperItem><img src="/assets/imgs/p1.jpg" /></SwiperItem>
	        		<SwiperItem><img src="/assets/imgs/p2.jpg" /></SwiperItem>
	        		<SwiperItem><img src="/assets/imgs/p3.jpg" /></SwiperItem>
	        		<SwiperItem><img src="/assets/imgs/p4.jpg" /></SwiperItem>
	        		<SwiperItem><img src="/assets/imgs/p5.jpg" /></SwiperItem>
	        	</Swiper>

				<pre>
				<code>
{`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Panel,Swiper} from '../../mtui/index'

const SwiperItem = Swiper;

class Dom extends Component {
	//构造函数
	constructor (props) {
		super(props);
	}

	changeback(a){
	    console.log(a)
	}

	render(){
		return (
	        <Panel header="Swiper">
        		<Swiper autoPlay={5000} button={true} style={{width:600}} activeIndex='1' animate='move' changeback={this.changeback.bind(this)}>
	        		<SwiperItem><img src="/assets/imgs/p1.jpg" /></SwiperItem>
	        		<SwiperItem><img src="/assets/imgs/p2.jpg" /></SwiperItem>
	        		<SwiperItem><img src="/assets/imgs/p3.jpg" /></SwiperItem>
	        		<SwiperItem><img src="/assets/imgs/p4.jpg" /></SwiperItem>
	        		<SwiperItem><img src="/assets/imgs/p5.jpg" /></SwiperItem>
	        	</Swiper>
	        </Panel>
	    );
	}
}
`}
				</code>
				</pre>
	        </Panel>
	    );
	}
}

//主页
export default Dom;