import React from "react";
import './app.style.css'

class App extends React.Component{
    state= {
        count:0,
    }
    intervalId = null;
    incrementCount = ()=>{
        this.setState({count:this.state.count+1})
    }
    decrementCount = () => {
       if(this.state.count > 0){
            this.setState({count:this.state.count-1})
       }
    }
    startTimer = ()=>{
        if(this.state.count > 0 && !this.intervalId){
            this.intervalId = setInterval(()=>{
                this.setState({count:this.state.count-1},()=>{
                    if(this.state.count == 0){
                        alert("Timer Finised")
                        clearInterval(this.intervalId)
                        this.intervalId = null
                    }
                })
            },1000)
        }
    }
    stopTimer = () => {
        if(this.intervalId){
            clearInterval(this.intervalId)
            this.intervalId = null
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
                <div className="Container">
                    <button className="Btn" onClick={this.startTimer}>Start</button>
                    <button className="Btn" >Reset</button>
                    <button className="Btn" onClick={this.stopTimer}>Stop</button>
                </div>
             </div>
        )
    }
}
export default App;