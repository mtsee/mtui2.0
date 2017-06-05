'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid, Panel, Tree} from '../../mtui/index';

const TreeChild = Tree.TreeChild;

class UI extends Component {
    // 构造函数
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <Panel header="Tree">
                <Tree>
                    <TreeChild>
                        <Tree header="标题1" show={false}>
                            <TreeChild>子菜单1</TreeChild>
                            <TreeChild>子菜单2</TreeChild>
                            <TreeChild>
                                <Tree header="子菜单3">
                                    <TreeChild>子菜单1</TreeChild>
                                    <TreeChild>子菜单2</TreeChild>
                                </Tree>
                            </TreeChild>
                        </Tree>
                    </TreeChild>
                    <TreeChild>
                        <Tree header="标题2">
                            <TreeChild>子菜单1</TreeChild>
                            <TreeChild>子菜单2</TreeChild>
                        </Tree>
                    </TreeChild>
                </Tree>
                <pre><code>
                {`
// header 可以传入一个 HTML, show 是默认展开或者收起
'use strict';

import './style.scss';
import React, { Component } from 'react';
import {Grid, Panel, Tree} from '../../mtui/index';

const TreeChild = Tree.TreeChild;

class UI extends Component {
    // 构造函数
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <Panel header="Tree">
                <Tree>
                    <TreeChild>
                        <Tree header="标题1" show={false}>
                            <TreeChild>子菜单1</TreeChild>
                            <TreeChild>子菜单2</TreeChild>
                            <TreeChild>
                                <Tree header="子菜单3">
                                    <TreeChild>子菜单1</TreeChild>
                                    <TreeChild>子菜单2</TreeChild>
                                </Tree>
                            </TreeChild>
                        </Tree>
                    </TreeChild>
                    <TreeChild>
                        <Tree header="标题2">
                            <TreeChild>子菜单1</TreeChild>
                            <TreeChild>子菜单2</TreeChild>
                        </Tree>
                    </TreeChild>
                </Tree>
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