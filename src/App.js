import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state={
    poems:[],
    showNewForm:false
  }

componentDidMount(){
  fetch('http://localhost:3000/poems')
  .then(resp=>resp.json())
  .then(resp =>this.setState({poems:resp}))
}

showForm=()=>{
 this.setState({showNewForm:!this.state.showNewForm})
}

handleNewPoem = (data)=>{
  this.setState({poems:[...this.state.poems,data]})
}

  render() {
    console.log(this.state.showNewForm)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showForm}>Show/hide new poem form</button>
          {this.state.showNewForm?<NewPoemForm handleNewPoem={this.handleNewPoem}/>:null}
        </div>
        <PoemsContainer 
        poems={this.state.poems}
        />
      </div>
    );
  }
}

export default App;
