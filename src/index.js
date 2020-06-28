import React from 'react';
import ReactDOM from 'react-dom';
/**
 * jsx描述界面上的元素长什么样子
 * jsx javascript+xml 是一种把js和html混合书写的一种语法
 * jsx可增加属性 js dom xx.className
 * jsx里面如果想使用一个变量，我们需要把它放在大括号里面
 * 表达式就是变量和运算符的组合
*/
// let styles ={color:'red'}

// ReactDOM.render(
//   <div style={styles}>
//     aaa
//   </div>,
//   document.getElementById('root')
// );

let ele = React.createElement('h1',{
  className:'title'
},'hello',React.createElement('span',null,'world'))
console.log(JSON.stringify(ele),'ele')
// react 元素 就是一个普通的js 对象
// {
//   "type":"h1",
//   "props":{
//    "className":"title",
//    "children":[
//      "hello",{
//          "type":"span",
//       "props":{"children":"world"}
//   }

// 元素的更新
// 元素是不可变的
setInterval(()=>{
  let clock = <div>{new Date().toLocaleTimeString()}</div>
  ReactDOM.render(clock,document.getElementById('root'))
},1000)

// ReactDOM.render(ele,document.getElementById('root'))

