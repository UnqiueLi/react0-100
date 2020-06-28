import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 我们把页面分成若干的独立部分，单独编写，单独维护
 * 函数组件
 * 一个返回普通react元素的函数就是一个合法的react组件
 * 组件需要返回一个并且仅能返回一个react根元素
 * 组件的名称需要大写
 * 
 * 收集属性对象props {name:'zhufeng',age:10}
 * 会把props对象传入welcome函数，并得到一个返回值 react元素
*/

// function Welcome(props){
// return <h1>helle {props.name}</h1>
// }

class Welcome extends React.Component{
render(){
return <h1>hwllo {this.props.name}</h1>
}
}
ReactDOM.render(<Welcome name="zhufeng"/>, document.getElementById('root'))

