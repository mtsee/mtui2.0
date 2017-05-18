'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid, Button, Select} from '../../mtui/index';

const Option = Select.Option;

class UI extends Component {
    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            name: 10,
            val: '2'
        };
    }

    onChange(e){
        console.log('close', e.target.value);
        this.setState({
            val: e.target.value
        });

    }

    showBack(){
        console.log('show');
    }

    setValue(){
        this.setState({
            val: '2'
        });
    }

    render(){
        return (
            <div className="mt-panel">
                <div className="mt-panel-h2">Select</div>
                <div className="mt-panel-box">
                    <Select
                            defaultValue=""  
                            style={{width: 90}} 
                            modalStyle={{height: 100}} 
                            showBack={this.showBack.bind(this)} 
                            onChange={this.onChange.bind(this)} 
                            trigger="click">
                        <Option value="" >all</Option>
                        <Option value="1" >选项1</Option>
                        <Option value="2" >选项2</Option>
                        <Option value="3" >选项3</Option>
                        <Option value="4" >选项4</Option>
                        <Option value="5" >选项5</Option>
                        <Option value="6" >选项6</Option>
                        <Option value="7" >选项7</Option>
                        <Option value="8" >选项8</Option>
                        <Option value="9" >选项9</Option>
                        <Option value="10" >选项10</Option>
                    </Select>
                    &nbsp;
                    <Select
                            defaultValue={null}  
                            style={{width: 90}} 
                            trigger="click">
                        <Option value="" >all</Option>
                        <Option value="1" >选项1</Option>
                        <Option value="2" >选项2</Option>
                        <Option value="3" >选项3</Option>
                    </Select>
                    &nbsp;
                    <Select
                            value={this.state.val} 
                            style={{width: 90}} 
                            showBack={this.showBack.bind(this)} 
                            onChange={this.onChange.bind(this)} 
                            trigger="hover">
                        <Option value="1" >选项1</Option>
                        <Option value="2" >选项2</Option>
                        <Option value="3" >选项3</Option>
                        <Option value="4" >选项4</Option>
                        <Option value="5" >选项5</Option>
                        <Option value="6" >选项6</Option>
                        <Option value="7" >选项7</Option>
                        <Option value="8" >选项8</Option>
                        <Option value="9" >选项9</Option>
                        <Option value="10" >选项10</Option>
                    </Select>
                    &nbsp;
                    <Select trigger="click" disabled={true} defaultValue="2">
                        <Option value="1" >选项1</Option>
                        <Option value="2" >选项2</Option>
                        <Option value="3" >选项3</Option>
                        <Option value="4" >选项4</Option>
                        <Option value="5" >选项5</Option>
                        <Option value="6" >选项6</Option>
                        <Option value="7" >选项7</Option>
                        <Option value="8" >选项8</Option>
                        <Option value="9" >选项9</Option>
                        <Option value="10" >选项10</Option>
                    </Select>
                    &nbsp;
                    <Button size="sm" type="success" onClick={this.setValue.bind(this)}>设置select的值</Button>
                </div>
                <Grid className="code" width="2/2">
<pre>
<code>
{`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid, Button, Select} from '../../mtui/index';

const Option = Select.Option;

class UI extends Component {
    // 构造函数
    constructor (props) {
        super(props);
        this.state = {
            name: 10,
            val: '2'
        };
    }

    onChange(e){
        console.log('close', e.target.value);
        this.setState({
            val: e.target.value
        });

    }

    showBack(){
        console.log('show');
    }

    setValue(){
        this.setState({
            val: '2'
        });
    }

    render(){
        return (
            <div className="mt-panel">
                <div className="mt-panel-h2">Select</div>
                <div className="mt-panel-box">
                    <Select
                            defaultValue=""  
                            style={{width: 90}} 
                            modalStyle={{height: 100}} 
                            showBack={this.showBack.bind(this)} 
                            onChange={this.onChange.bind(this)} 
                            trigger="click">
                        <Option value="" >all</Option>
                        <Option value="1" >选项1</Option>
                        <Option value="2" >选项2</Option>
                        <Option value="3" >选项3</Option>
                        <Option value="4" >选项4</Option>
                        <Option value="5" >选项5</Option>
                        <Option value="6" >选项6</Option>
                        <Option value="7" >选项7</Option>
                        <Option value="8" >选项8</Option>
                        <Option value="9" >选项9</Option>
                        <Option value="10" >选项10</Option>
                    </Select>
                    &nbsp;
                    <Select
                            defaultValue={null}  
                            style={{width: 90}} 
                            trigger="click">
                        <Option value="" >all</Option>
                        <Option value="1" >选项1</Option>
                        <Option value="2" >选项2</Option>
                        <Option value="3" >选项3</Option>
                    </Select>
                    &nbsp;
                    <Select
                            value={this.state.val} 
                            style={{width: 90}} 
                            showBack={this.showBack.bind(this)} 
                            onChange={this.onChange.bind(this)} 
                            trigger="hover">
                        <Option value="1" >选项1</Option>
                        <Option value="2" >选项2</Option>
                        <Option value="3" >选项3</Option>
                        <Option value="4" >选项4</Option>
                        <Option value="5" >选项5</Option>
                        <Option value="6" >选项6</Option>
                        <Option value="7" >选项7</Option>
                        <Option value="8" >选项8</Option>
                        <Option value="9" >选项9</Option>
                        <Option value="10" >选项10</Option>
                    </Select>
                    &nbsp;
                    <Select disabled={true} defaultValue="">
                        <Option value="1" >选项1</Option>
                        <Option value="2" >选项2</Option>
                        <Option value="3" >选项3</Option>
                        <Option value="4" >选项4</Option>
                        <Option value="5" >选项5</Option>
                        <Option value="6" >选项6</Option>
                        <Option value="7" >选项7</Option>
                        <Option value="8" >选项8</Option>
                        <Option value="9" >选项9</Option>
                        <Option value="10" >选项10</Option>
                    </Select>
                    &nbsp;
                    <Button size="sm" type="success" onClick={this.setValue.bind(this)}>设置select的值</Button>
                </div>
            </div>
        );
    }
}

//主页
export default UI;
`}
</code>
</pre>              
                </Grid>
            </div>
        );
    }
}

//主页
export default UI;