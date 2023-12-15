import { PureComponent } from 'react'

class PureCounter extends PureComponent {

    constructor() {
      super()
    
      this.state = {
         count :0,
         toggle : false,
         currentState: "Off",
      }
    }

    handleIncrement = () => {
        if (this.state.toggle) {
            this.setState({count:this.state.count+1})
        } else {
            this.setState({count:this.state.count})
        }
    }

    handleToggle = () => {
        this.setState({toggle:!this.state.toggle})
        this.state.currentState == "Off" ? this.setState({currentState:"On"}) : this.setState({currentState:"Off"})
    }

    render() {
        console.log("This is Pure Component")
        return (
        <div>
            <h1>PureCount - {this.state.count}</h1>
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleToggle}>Toggle({this.state.currentState})</button>
        </div>
        )
    }
}

export default PureCounter
