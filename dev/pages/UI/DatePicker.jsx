'use strict';

import './style.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Button, DatePicker, DatePickers, Input } from '../../mtui/index';

class Dates extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            name: '111',
            date: '2017-03-14'
        };
    }

    onChange(data) {
        console.log('弹窗关闭', data);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                date: '2017-03-18'
            });
        }, 1000);
    }

    render() {
        return (
            <div className="mt-panel">
                <div className="mt-panel-h2">日期组件</div>
                <div className="mt-panel-box">
                    <DatePicker size="xs" style={{ width: 100 }} defaultValue="" format="yyyy-mm-dd" placeholder="选择日期" />&nbsp;
                    <DatePicker size="xs" defaultValue="2017-03-14" visible={true} onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                    <DatePicker size="xs" defaultValue="2017" onChange={this.onChange.bind(this)} format="yyyy" />&nbsp;
                    <DatePickers size="xs" defaultValue="" onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                    一秒后变化：<DatePicker size="xs" value={this.state.date} onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                    <DatePicker range="2017-03-14," size="xs" defaultValue="2017-03-14" onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                </div>
                <Grid className="code" width="2/2">
                    <pre>
                        <code>
                            {`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Button, DatePicker, DatePickers, Input } from '../../mtui/index';

class Dates extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            name: '111',
            date: '2017-03-14'
        };
    }

    onChange(data) {
        console.log('弹窗关闭', data);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                date: '2017-03-18'
            });
        }, 1000);
    }

    render() {
        return (
            <div className="mt-panel">
                <div className="mt-panel-h2">日期组件</div>
                <div className="mt-panel-box">
                    <DatePicker size="xs" style={{ width: 100 }} defaultValue="" format="yyyy-mm-dd" placeholder="选择日期" />&nbsp;
                    <DatePicker size="xs" defaultValue="2017-03-14" visible={true} onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                    <DatePicker size="xs" defaultValue="2017" onChange={this.onChange.bind(this)} format="yyyy" />&nbsp;
                    <DatePickers size="xs" defaultValue="" onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                    <DatePicker size="xs" value={this.state.date} onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                    <DatePicker range="2017-03-14," size="xs" defaultValue="2017-03-14" onChange={this.onChange.bind(this)} format="yyyy-mm-dd" />&nbsp;
                </div>
            </div>
        );
    }
}

// 主页
export default Dates;
`}
                        </code>
                    </pre>
                </Grid>
            </div>
        );
    }
}

// 主页
export default Dates;