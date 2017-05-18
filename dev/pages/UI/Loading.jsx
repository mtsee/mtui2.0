'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Grid, Panel, LoadingBox, LoadingModal, Button } from '../../mtui/index';

class UI extends Component {
    // 构造函数
    constructor (props) {
        super(props);
    }

    onClickLoading(mark){
        if(mark){
            LoadingModal.show('loading');
        }else{
            LoadingModal.hide();
        }

        setTimeout( () => {
            LoadingModal.hide();
        }, 2000);
    }

    render(){
        return (
            <Panel header="Loading">

                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox show={true} info='loading...' type="loading1"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="2/7">
                    <LoadingBox info='数据载入中' type="loading2"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox info='数据载入中' type="loading3"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox info='数据载入中' type="loading4"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox info='数据载入中' type="loading5"/>
                </Grid>

                <br/><br/>
                <Button onClick={this.onClickLoading.bind(this,true)} type="success">Loading弹出</Button>
                &nbsp;
                <Button onClick={this.onClickLoading.bind(this,false)} type="warning">Loading销毁</Button>

                <pre><code>
                {`
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid,Panel,LoadingBox,LoadingModal,Button} from '../../mtui/index'

class UI extends Component {
    //构造函数
    constructor (props) {
        super(props);
    }

    onClickLoading(mark){
        if(mark){
            LoadingModal.show('loading')
        }else{
            LoadingModal.hide()
        }
    }

    render(){
        return (
            <Panel header="Loading">

                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox show={true} info='loading...' type="loading1"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="2/7">
                    <LoadingBox info='数据载入中' type="loading2"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox info='数据载入中' type="loading3"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox info='数据载入中' type="loading4"/>
                </Grid>
                &nbsp;
                <Grid style={{background:'rgba(0,0,0,.1)', height:100}} width="1/7">
                    <LoadingBox info='数据载入中' type="loading5"/>
                </Grid>

                <br/><br/>
                <Button onClick={this.onClickLoading.bind(this,true)} type="success">Loading弹出</Button>
                &nbsp;
                <Button onClick={this.onClickLoading.bind(this,false)} type="warning">Loading销毁</Button>
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