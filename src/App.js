import React, {Component} from 'react';
import './style/App.css'

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: '#',
    }
  }
  
  /*
  async componentDidMount(){
    await this.fetchJale()
  }*/

  fetchJale = async () => {
    //let res = await fetch('https://pokeapi.co/api/v2/pokemon/venusaur')
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
    let data = await res.json()

    //console.log(data['sprites']['front_default'])
    console.log(data.name);
    console.log(data.sprites.front_default)
    this.setState({
      img: data.sprites.front_default
    })
  }
  

  handleName = event => {
    this.setState({
      name: event.target.value
    })
  }
  

  handleSubmit = event =>{
    var jeje = this.state.name;
    console.log(jeje)
    alert(jeje)
    this.fetchJale()
    //limpiar
    this.setState({
      name: '',
    })
    event.preventDefault()
  }
  
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

        <div className="card text-center">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          <div className="card-footer text-muted">
            2 days ago
          </div>
        </div>
      
      
        
      </div>
    );
  }

}


export default App;
