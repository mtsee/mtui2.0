'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,Button,Popover} from '../../mtui/index'

class UI extends Component {
    //构造函数
    constructor (props) {
        super(props);
        this.state = {
            show: false
        }
    }

    onClickHandler(data,e){
        console.log('点击了button的click',data);

        this.setState({
            show: !this.state.show
        })
    }

    render(){
        return (
            <Panel header="Popover">
                <Popover show={this.state.show} trigger="click" content={'就是一个小提示！'} place="top">
                    <a>click弹窗在上</a>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover show={this.state.show} trigger="click" content={'就是一个小提示！'} place="top">
                    <Button type="info">click弹窗在上</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="click" content={'就是一个小提示！'} place='bottom'>
                    <Button onClick={() => this.onClickHandler(1) } type="warning">click弹窗在下</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="click" content={'就是一个小提示！'} place='left'>
                    <Button type="success">click弹窗在左</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="click" content={'就是一个小提示！'} place='right'>
                    <Button type="danger">click弹窗在右</Button>
                </Popover>
                <br/>
                <br/>
                <br/>
                <br/>
                <Popover trigger="hover" content={'就是一个小提示！'} place="top">
                    <Button type="info">hover弹窗在上</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="hover" content={'就是一个小提示！'} place='bottom'>
                    <Button type="warning">hover弹窗在下</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="hover" content={'就是一个小提示！'} place='left'>
                    <Button type="success">hover弹窗在左</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="hover" content={'就是一个小提示！'} place='right'>
                    <Button type="danger">hover弹窗在右</Button>
                </Popover>
                <pre><code>
                {`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,Button,Popover} from '../../mtui/index'

class UI extends Component {
    //构造函数
    constructor (props) {
        super(props);
    }

    onClickHandler(data,e){
        console.log('点击了button的click',data)
        this.setState({
            show: !this.state.show
        })
    }

    render(){
        return (
            <Panel header="Popover">
                <Popover show={this.state.show} trigger="click" content={'就是一个小提示！'} place="top">
                    <Button type="info">click弹窗在上</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="click" content={'就是一个小提示！'} place='bottom'>
                    <Button onClick={() => this.onClickHandler(1) } type="warning">click弹窗在下</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="click" content={'就是一个小提示！'} place='left'>
                    <Button type="success">click弹窗在左</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="click" content={'就是一个小提示！'} place='right'>
                    <Button type="danger">click弹窗在右</Button>
                </Popover>
                <br/>
                <br/>
                <br/>
                <br/>
                <Popover trigger="hover" content={'就是一个小提示！'} place="top">
                    <Button type="info">hover弹窗在上</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="hover" content={'就是一个小提示！'} place='bottom'>
                    <Button type="warning">hover弹窗在下</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="hover" content={'就是一个小提示！'} place='left'>
                    <Button type="success">hover弹窗在左</Button>
                </Popover>
                &nbsp;
                &nbsp;
                <Popover trigger="hover" content={'就是一个小提示！'} place='right'>
                    <Button type="danger">hover弹窗在右</Button>
                </Popover>
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