/**
* 一个简单的日历插件
* @author : Mantou
* @date : 2016-03-01
*/
import React from 'react';

// 树形菜单
class TreeMenu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: []
        };
    }
    handleClickShow = (e) => {
        var $this = $(e.currentTarget);
        var $box = $this.next('.mt-treemenu-box');
        var $parent = $box.closest('li');  
        if($box[0]){
            if($box.is(':hidden')){
                $this.addClass('mt-treemenu-active');
                $box.show(); 
            }else{
                $this.removeClass('mt-treemenu-active'); 
                $box.hide(); 
            }
        }
    }

    setHtml = () => {
        var setArr = function(data){
            var arr = []; 
            data.map((elem, index) => {
                if(typeof(elem) === 'object' ){
                    arr.push(
                        <li key={index}> 
                            <div className="mt-treemenu-title" onClick={this.handleClickShow}><i className="iconfont icon-right"></i> {elem.title}</div>
                            {elem.children.length > 0 ? setArr(elem.children) : ''}
                        </li>
                    );
                }else{
                    arr.push(<li key={index}><div className="mt-treemenu-title"> {elem}</div></li>);
                }
                index++;
            });
            return <ul className="mt-treemenu-box">{arr}</ul>;
        }.bind(this);
        return setArr(this.props.data);
    }

    render(){
        return (
            <div className="mt-treemenu">
                {this.setHtml()}
            </div>
        );
    }
}

// 配置信息
export default TreeMenu;