import React, { Component } from 'react';
import Validation from  './Validation';
import Char from './Char';
import './App.css';

class App extends Component {

  state ={
    name:''
  }
  deleteHandler =(index)=>{
    const text = this.state.name.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({name: updatedText});
  
  }
  changeHandler = (event) =>{
    this.setState({name: event.target.value})
  }
  render() {
    const  style = {
      display: 'inline-block',
      padding:'16px',
      margin:'16px',
      textAlign:'center',
      border: '1px solid black'
  }
    return (
      <div className="App">
       <input type="text" onChange={this.changeHandler} value={this.state.name}></input>
       <p>Text Count :{this.state.name.length}</p> 

       <Validation textLength={this.state.name.length} />
       {this.state.value}
 
 {
   this.state.name.split('').map((word, index)=> {
     return (
    <div key={index} style={style}>
         <Char  style={style} word={word} clickHandler={()=>this.deleteHandler(index)}/>
    </div>
 
     )
   })
 }
   
      </div>
    );
  }
}

export default App;
