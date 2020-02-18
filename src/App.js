import React, {Component} from 'react';
import './style/App.css'
import Form from './component/form';

class App extends React.Component{
  
  render() {
    return (
      <div>
        {/*
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="nombre"
            value={this.state.name}
            onChange={this.handleName}
          />
          <button type="submit">submit</button>
        </form>
        <br/>
        <img src={this.state.img}  alt="..."/>
        */}

        <Form/>
      
      
        
      </div>
    );
  }

}


export default App;
