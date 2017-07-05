'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid, TimePicker} from '../../mtui/index';

class Dom extends Component {
    // 构造函数
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <div className="mt-panel">
                <h3 className="mt-panel-h2">TIP 提示框</h3>
                  <div className="mt-panel-box">
                      <Grid width="2/2" className="btns">
                          <TimePicker />
                      </Grid>
                      <Grid className="code">
<pre>
<code>
{`
import './style.scss';
import React, { Component } from 'react';
import {Tip} from '../../mtui/index'

class Dom extends Component {
    //构造函数
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <div>
                <TimePicker />
            </div>
        );
    }
}
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