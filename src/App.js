import React, { Component } from 'react'
import Counter from './components/Counter'


export class App extends Component {
  state={
    show:false
  }
  toggle = () => this.setState({show:!this.state.show})
  render() {
    return (
      <div>
        <button onClick={this.toggle}>{this.state.show ?   "hide" : "show"}</button> <br/>
        {
          this.state.show ? <Counter/> : "Click to show the counter"
        }
      </div>
    )
  }
}

export default App
