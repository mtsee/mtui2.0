'use strict';
import React, { Component } from 'react';
import Dropdown from '../dropdown/Dropdown';
import Input from '../input/Input';

class TimePicker extends Component {

    static defaultProps = {
        size: '' // 默认, min
    }

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            times: '--:--:--'
        };
    }

    // 渲染前
    componentWillMount() {
        // 初始化日期 默认是当前日期
        this.setState({
            times: this.props.defaultValue || this.props.value || this.state.times
        });
    }

    componentDidMount() {
        // ...
    }

    // 更新弹窗里面的数据
    componentDidUpdate(prevProps) {
        // ...
    }

    // 如果 value 更新
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                times: nextProps.times
            });
        }
    }

    showBack(e) {
        if(this.props.showBack) {
            this.props.showBack(e);
        }
    }

    closeBack(e) {
        if(this.props.closeBack) {
            this.props.closeBack(e);
        }
    }

    //
    render() {
        let { showBack, type, closeBack, modalClass, className, modalStyle, size, visible, validateInfo, onChange, ...other } = this.props;
        let cName = ['mt-input mt-input-timepicker mt-input-suffix-out'];
        if (className) {
            cName.push(className);
        }

        let inputDom = <span>
                <Input readOnly 
                className={cName.join(' ')} 
                {...other} 
                placeholder="时间" 
                suffix={<i className="iconfont icon-time"></i>}/>
            </span>;
        return (
            <Dropdown 
                btn={inputDom} 
                modalStyle={modalStyle || {}} 
                modalClass={modalClass || ''}
                visible={visible || false} 
                showBack={this.showBack.bind(this)} 
                closeBack={this.closeBack.bind(this)} 
                trigger="click">
        			<div>
        				开发中...
        			</div>
        	</Dropdown>
        );
    }
}

// TimePicker
export default TimePicker;