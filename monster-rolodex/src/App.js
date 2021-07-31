import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {

      monsters: [],
      searchField:''

    };

    this.handleChange=this.handleChange.bind(this);

  }
        // {
        // name: 'Frankenstein',
        // id: 'asc1'
        // },
        // {
        //   name: 'Dracula',
        //   id:'asr2'

        //   },
        //   {
        //     name: 'Zombie',
        //     id:'as1w'
        //     }
      // 
     

  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
    // console.log(response)
    
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value})
  }
  
  render() {
    const { monsters, searchField } = this.state;
    // const monsters  = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return(

      <div className='App'>
      
      <h1 className = 'h1'> Monster Roldex</h1>
      <SearchBox 
      placeholder='search monsters'
      // handleChange={ e => this.setState({searchField:e.target.value })} />
      handleChange={this.handleChange} />
      <CardList monsters={ filteredMonsters } />
     
    
      </div>
    );
  }
}

export default App;
