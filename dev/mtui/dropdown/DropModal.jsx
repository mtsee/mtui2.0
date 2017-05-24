'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DropModal extends Component {

    // 构造函数
    constructor (props) {
        super(props);
    }

    render(){
        let set = ( this.props.getPlace ? this.props.getPlace() : null );
        if(set){
            var {height, left, top, width} = set;

            // 设置 left
            if(this.props.style.width){
                left = left + this.props.style.width > document.body.offsetWidth ? document.body.offsetWidth - this.props.style.width - 10 :  left; // 判断left,不能超过body区域
            }

            var style = Object.assign({
                display: this.props.show ? 'block' : 'none'
            }, {
                left: left,
                top: top + height
            }, this.props.style || {});
        }

        let cName = ['mt-dropdown'];
        if( this.props.className ){
            cName.push(this.props.className);
        }
        
        return <div className={cName.join(' ')} style={style} id={this.props.mid}>
                    {this.props.children}
               </div>;
    }
}

// 主页
export default DropModal;