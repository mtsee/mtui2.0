'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Checkbox} from '../../mtui/index'

const CheckboxGroup = Checkbox.CheckboxGroup;

class Dom extends Component {
    //构造函数
    constructor (props) {
        super(props);
        this.state = {
            checked : true,
            value: [2],
            allValue:[2,4]
        }
    }

    onChange(data){
        console.log(data)

        this.setState({
            checked: data
        })
    }

    onChangeGroup(data){
        console.log('不受控组件',data)
    }

    onChangeGroupSK(data){
        console.log('受控组件',data)
        this.setState({
            value:data
        })
    }

    onChangeAll(data){
        console.log(data)

        if(data){
            this.setState({
                allValue:[1,2,3,4]
            })
        }else{
            this.setState({
                allValue:[]
            })
        }
    }

    onChangeGroupSKAll(data){
        this.setState({
            allValue:data
        })
    }

    //默认参数
    defaultChecked(){
        console.log(this.refs.defaultChecked.getValue());
    }

    render(){

        let checkAll = null;

        if(this.state.allValue.length == 4){
            checkAll = true
        }else if(this.state.allValue.length == 0){
            checkAll = false
        }else{
            checkAll = 'other';
        }

        return (
            <div className="mt-panel">
                <h3 className="mt-panel-h2">Checkbox</h3>
                <div className="mt-panel-box">
                    <Grid width="2/2">
                        <Checkbox onChange={this.onChange.bind(this)} checked={this.state.checked}>选项卡</Checkbox> &nbsp;
                        <Checkbox disabled={true}>选项卡</Checkbox> &nbsp;
                        <Checkbox checked={true} disabled={true}>选项卡</Checkbox>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid width="2/2">
                        <h4>不受控组件</h4>
                        <Checkbox value="mantou" ref="defaultChecked" onChange={this.defaultChecked.bind(this)} defaultChecked={true}>选项卡</Checkbox> &nbsp;
                        <CheckboxGroup onChange={this.onChangeGroup.bind(this)} defaultValue={[2,4]}>
                            <Checkbox value={1}>选项卡1</Checkbox>
                            <Checkbox disabled={true} value={2}>选项卡2</Checkbox>
                            <Checkbox value={3}>选项卡3</Checkbox>
                            <Checkbox value={4}>选项卡4</Checkbox>
                        </CheckboxGroup>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid width="2/2">
                        <h4>受控组件</h4>
                        <CheckboxGroup onChange={this.onChangeGroupSK.bind(this)} value={this.state.value}>
                            <Checkbox value={1}>选项卡1</Checkbox>
                            <Checkbox disabled={true} value={2}>选项卡2</Checkbox>
                            <Checkbox value={3}>选项卡3</Checkbox>
                            <Checkbox value={4}>选项卡4</Checkbox>
                        </CheckboxGroup>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid width="2/2">
                        <h4>不受控组件</h4>
                        <CheckboxGroup type="button" onChange={this.onChangeGroup.bind(this)} defaultValue={[2,4]}>
                            <Checkbox value={1}>选项卡1</Checkbox>
                            <Checkbox value={2}>选项卡2</Checkbox>
                            <Checkbox value={3}>选项卡3</Checkbox>
                            <Checkbox value={4}>选项卡4</Checkbox>
                        </CheckboxGroup>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid width="2/2">
                        <h4>受控组件</h4>
                        <Checkbox onChange={this.onChangeAll.bind(this)} checked={checkAll}>全选</Checkbox> &nbsp;
                        <CheckboxGroup onChange={this.onChangeGroupSKAll.bind(this)} value={this.state.allValue}>
                            <Checkbox value={1}>选项卡1</Checkbox>
                            <Checkbox value={2}>选项卡2</Checkbox>
                            <Checkbox value={3}>选项卡3</Checkbox>
                            <Checkbox value={4}>选项卡4</Checkbox>
                        </CheckboxGroup>
                    </Grid>
                    <Grid>
<pre>
<code>
{`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Button,Checkbox} from '../../mtui/index'

const CheckboxGroup = Checkbox.CheckboxGroup;

class Dom extends Component {
    //构造函数
    constructor (props) {
        super(props);
        this.state = {
            checked : true,
            value: [2],
            allValue:[2,4]
        }
    }

    onChange(data){
        console.log(data)

        this.setState({
            checked: data
        })
    }

    onChangeGroup(data){
        console.log('不受控组件',data)
    }

    onChangeGroupSK(data){
        console.log('受控组件',data)
        this.setState({
            value:data
        })
    }

    onChangeAll(data){
        console.log(data)

        if(data){
            this.setState({
                allValue:[1,2,3,4]
            })
        }else{
            this.setState({
                allValue:[]
            })
        }
    }

    onChangeGroupSKAll(data){
        this.setState({
            allValue:data
        })
    }

    //默认参数
    defaultChecked(){
        console.log(this.refs.defaultChecked.getValue());
    }

    render(){

        let checkAll = null;

        if(this.state.allValue.length == 4){
            checkAll = true
        }else if(this.state.allValue.length == 0){
            checkAll = false
        }else{
            checkAll = 'other';
        }

        return (
            <div className="mt-panel">
                <h3 className="mt-panel-h2">Checkbox</h3>
                <div className="mt-panel-box">
                    <Grid width="2/2">
                        <Checkbox onChange={this.onChange.bind(this)} checked={this.state.checked}>选项卡</Checkbox> &nbsp;
                        <Checkbox disabled={true}>选项卡</Checkbox> &nbsp;
                        <Checkbox checked={true} disabled={true}>选项卡</Checkbox>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid width="2/2">
                        <h4>不受控组件</h4>
                        <Checkbox value="mantou" ref="defaultChecked" onChange={this.defaultChecked.bind(this)} defaultChecked={true}>选项卡</Checkbox> &nbsp;
                        <CheckboxGroup onChange={this.onChangeGroup.bind(this)} defaultValue={[2,4]}>
                            <Checkbox value={1}>选项卡1</Checkbox>
                            <Checkbox disabled={true} value={2}>选项卡2</Checkbox>
                            <Checkbox value={3}>选项卡3</Checkbox>
                            <Checkbox value={4}>选项卡4</Checkbox>
                        </CheckboxGroup>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid width="2/2">
                        <h4>受控组件</h4>
                        <CheckboxGroup onChange={this.onChangeGroupSK.bind(this)} value={this.state.value}>
                            <Checkbox value={1}>选项卡1</Checkbox>
                            <Checkbox disabled={true} value={2}>选项卡2</Checkbox>
                            <Checkbox value={3}>选项卡3</Checkbox>
                            <Checkbox value={4}>选项卡4</Checkbox>
                        </CheckboxGroup>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid width="2/2">
                        <h4>不受控组件</h4>
                        <CheckboxGroup type="button" onChange={this.onChangeGroup.bind(this)} defaultValue={[2,4]}>
                            <Checkbox value={1}>选项卡1</Checkbox>
                            <Checkbox value={2}>选项卡2</Checkbox>
                            <Checkbox value={3}>选项卡3</Checkbox>
                            <Checkbox value={4}>选项卡4</Checkbox>
                        </CheckboxGroup>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid width="2/2">
                        <h4>受控组件</h4>
                        <Checkbox onChange={this.onChangeAll.bind(this)} checked={checkAll}>全选</Checkbox> &nbsp;
                        <CheckboxGroup onChange={this.onChangeGroupSKAll.bind(this)} value={this.state.allValue}>
                            <Checkbox value={1}>选项卡1</Checkbox>
                            <Checkbox value={2}>选项卡2</Checkbox>
                            <Checkbox value={3}>选项卡3</Checkbox>
                            <Checkbox value={4}>选项卡4</Checkbox>
                        </CheckboxGroup>
                    </Grid>
                </div>
            </div>
        );
    }
}

//主页
export default Dom;
`}
</code>
</pre>
                    </Grid>
                </div>
            </div>
        );
    }
}

//主页
export default Dom;