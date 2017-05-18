'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,Validate,DatePicker,Input,Button,Select} from '../../mtui/index'

const ValidateGroup = Validate.ValidateGroup;

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			type: 'danger'
		}
	}

	setType(e){
		this.setState({
			type: e.target.value
		});
	}

	onChange(e){
		console.log('>>',e.target.value)
	}

	onEnd(data){
		console.log("submit=>",data)
	}

	render(){
		return (
			<Panel header="Validate">
				<ValidateGroup submit={this.onEnd}>
					<div>
						<Validate exgs={[
							{regs:'notempty',type:'warning',info:'不能为空！'},
							{regs:'email',type:'danger',info:'邮箱错误！'}
						]}><Input onChange={this.onChange.bind(this)} placeholder="邮箱"/></Validate>
					</div>
					<br/>
					<div>
						<Validate exgs={[
							{regx:'^[2-6]+$',type:'danger',info:'请输入2~6的数字'}
						]}><Input onChange={this.onChange.bind(this)} placeholder="请输入2~6的数字"/></Validate>
					</div>
					<br/>
					<div>
						<Validate exgs={[{regx:'^[1-2]+$',type:'danger',info:'请输入1,2的数字'} ]}>
							<Select defaultValue=""
					        		modalStyle={{width:180, height:100}} 
					        		onChange={this.onChange.bind(this)} 
					        		trigger="click">
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
				    	</Validate>
			    	</div>
			    	<br/>
			    	<div>
						<Validate exgs={[
							{regs:'notempty',type:'warning',info:'不能为空！'},
							{regx:'(2017-03-)((0[1-9])|([1-2][0-9]|31))',type:'danger',info:'只能輸入2017年3月的日期'}
						]}>
							<DatePicker style={{width:152}} size="xs" defaultValue="" mid="dateId2" format="yyyy-mm-dd"/>
						</Validate>
					</div>
					<br/>
					<br/>
					<Button style={{width:181}} dom="button" htmlType="submit" type="primary" className="login-form-button">submit</Button>
				</ValidateGroup>
				<div>
						表单验证案例
						<br/>regs 可用参数请参考 mtui/Validate/regex   
						<br/>regx: 自定义验证规则
					</div>
					<br/>
					<br/>
					<br/>
					<Validate type={this.state.type}>
						<Input style={{width: 200}} onChange={this.setType.bind(this)} defaultValue="" placeholder="danger/success/warning"/>
					</Validate>
				<pre><code>
				{`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,Validate,DatePicker,Input,Button,Select} from '../../mtui/index'

const ValidateGroup = Validate.ValidateGroup;

class UI extends Component {
	//构造函数
	constructor (props) {
		super(props);
		this.state = {
			type: 'danger'
		}
	}

	setType(e){
		this.setState({
			type: e.target.value
		});
	}

	onChange(e){
		console.log('>>',e.target.value)
	}

	onEnd(data){
		console.log("submit=>",data)
	}

	render(){
		return (
			<Panel header="Validate">
				<ValidateGroup submit={this.onEnd}>
					<div>
						<Validate exgs={[
							{regs:'notempty',type:'warning',info:'不能为空！'},
							{regs:'email',type:'danger',info:'邮箱错误！'}
						]}><Input onChange={this.onChange.bind(this)} placeholder="邮箱"/></Validate>
					</div>
					<br/>
					<div>
						<Validate exgs={[
							{regx:'^[2-6]+$',type:'danger',info:'请输入2~6的数字'}
						]}><Input onChange={this.onChange.bind(this)} placeholder="请输入2~6的数字"/></Validate>
					</div>
					<br/>
					<div>
						<Validate exgs={[{regx:'^[1-2]+$',type:'danger',info:'请输入1,2的数字'} ]}>
							<Select defaultValue=""
					        		modalStyle={{width:180, height:100}} 
					        		onChange={this.onChange.bind(this)} 
					        		trigger="click">
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
				    	</Validate>
			    	</div>
			    	<br/>
			    	<div>
						<Validate exgs={[
							{regs:'notempty',type:'warning',info:'不能为空！'},
							{regx:'(2017-03-)((0[1-9])|([1-2][0-9]|31))',type:'danger',info:'只能輸入2017年3月的日期'}
						]}>
							<DatePicker style={{width:152}} size="xs" defaultValue="" mid="dateId2" format="yyyy-mm-dd"/>
						</Validate>
					</div>
					<br/>
					<br/>
					<Button style={{width:181}} dom="button" htmlType="submit" type="primary" className="login-form-button">submit</Button>
				</ValidateGroup>
				<div>
						表单验证案例
						<br/>regs 可用参数请参考 mtui/Validate/regex   
						<br/>regx: 自定义验证规则
					</div>
					<br/>
					<br/>
					<br/>
					<Validate type={this.state.type}>
						<Input onChange={this.setType.bind(this)} defaultValue="" placeholder="danger/success/warning"/>
					</Validate>
			</Panel>	
	    );
	}
}

//主页
export default UI;
				`}
				</code></pre>
			</Panel>	
	    );
	}
}

//主页
export default UI;