import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component{
    constructor(props){
    super(props)
    this.state={
        date:new Date().toLocaleTimeString()
    }
    }
    componentDidMount(){
        console.log(this.state.date)
        this.$timer=setInterval(()=>{
            this.setState({
                date:new Date().toLocaleTimeString() 
            })
        },1000)
    }
    render(){
        return(
        <div>时间:{this.state.date}</div>
        )
    }
}
ReactDOM.render(<Clock />,document.getElementById('root'))