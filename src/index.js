import React from 'react'
import ReactDOM from 'react-dom'

// setState 可能是异步操作
// 解决this指针方法
/**
 * bind()
 * 匿名函数()=>{}
 * 类的公共属性
 */
class Counter extends React.Component{
    constructor(props){
    super(props)
    this.state={
        number: 0
    }
    }
    // 给类的实例增加一个add属性，而这个属性里的this绑死为组件的实例
    // this.add
    add(){
        // 异步 合并
        // console.log(this,'this')
        // this.setState({
        //     number: this.state.number + 1
        // })
        // console.log(this.state.number)
        // this.setState({
        //     number: this.state.number + 2
        // })
        // console.log(this.state.number)
        // // 强制更新，不管状态和属性修改没有，都会强制刷新界面
        // this.forceUpdate()
        // 当调用setstate的时候，其实状态并没有直接改变，而是放在一个队列里面
        this.setState((state)=>({number:state.number + 1}),()=>{console.log('callback')})
        this.setState((state)=>({number:state.number + 1}))
    }
    render(){
        return(
        <>
            <div>时间:{this.state.number}</div>
            <button onClick={this.add.bind(this)}>+</button>
        </>
        )
    }
}
ReactDOM.render(<Counter />,document.getElementById('root'))