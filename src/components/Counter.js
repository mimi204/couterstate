import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        console.log("constructor()")
        super(props)
    
        this.state = {
            count:0,
            idInterval:null
        }
    }
    
    // componentDidMount(){
    //     console.log("componentDidMount()")
    //    this.setState({ idInterval:  setInterval(() => {
    //     this.setState({count:this.state.count+1})
    // }, 1000)});
    
        // setTimeout(() => {
        //     this.setState({count:this.state.count+10})
        // }, 5000);
    // }
    increment = () => this.setState({ count:this.state.count+1  });
    decrement = () => {
        this.setState({ count:this.state.count-1  });
        if(this.state.count ===0 ){
            this.setState({count:0})
            alert("Stop!!!!!")
        }
    }
    componentDidUpdate(){
        console.log("componentDidUpdate()")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount()")
        // clearInterval(this.state.idInterval)
    }
    render() {
        console.log("render()")
        console.log(this.state.idInterval)
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <p>{this.state.count}</p>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter
