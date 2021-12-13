import React from "react";
import './app.style.css'

class App extends React.Component{
    state= {
        count:0,
    }
    incrementCount = ()=>{
        this.setState({count:this.state.count+1})
    }
    decrementCount = () => {
       if(this.state.count > 0){
            this.setState({count:this.state.count-1})
       }
    }
    render() {
        
        return (
             <div className="App">
                 <h1 className="Heading">React Timer App</h1>
                <div className="Container">
                    <button className="Btn" onClick={this.decrementCount}> - </button>
                    <p className="Text">{this.state.count}</p>
                    <button className="Btn" onClick={this.incrementCount}> + </button>
                </div>
             </div>
        )
    }
}
export default App;