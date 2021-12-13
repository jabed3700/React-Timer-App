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
        this.setState({count:this.state.count-1})
    }
    render() {
        
        return (
             <div className="App">
                 <h1 className="Heading">React Timer App</h1>
             </div>
        )
    }
}
export default App;