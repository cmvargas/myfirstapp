import React from 'react';
// import logo from './logo.svg';
import './App.css';
// function Helloworld(props){
// return (
//   <div id="hello">
//     <h1>{props.subtitle}</h1>
//     {props.mytext}
//   </div>
// );
// }

class Helloworld extends React.Component{
  state = {
    show: true
  };
  toggleShow=()=>{
    this.setState({show: !this.state.show});
  }
  render(){
    if (this.state.show){
      return (
        <div id="hello">
          <h1>{this.props.subtitle}</h1>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      );
    }
    else{
      return (
      <div>
        There are not elements
        <button onClick={this.toggleShow}>Toggle show</button>
      </div>);
    }
    
  }
}

// const App = () => <div><Helloworld/></div>

// class App extends React.Component{
//   render(){
//     return (<div>This is my component: <Helloworld/></div>);
//   }
// }
function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="Hello fazt" subtitle="loremp ispum"/> 
      <Helloworld mytext="Hola mundo" subtitle="component two"/> 
      <Helloworld mytext="Hello!" subtitle="component three"/> 
    </div>
  );
}

export default App;
